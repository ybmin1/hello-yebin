import React, { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";

const BackgroundAnimationEffect: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const initApp = async () => {
      const app = new PIXI.Application();
      await app.init({
        width: window.innerWidth,
        height: 1500,
        canvas: document.createElement("canvas"),
      });

      if (canvasRef.current && app.canvas) {
        canvasRef.current.appendChild(app.canvas);
      }

      const backgroundImage = await PIXI.Assets.load(
        "/src/assets/sample-47.jpg"
      );
      const displacementTexture = await PIXI.Assets.load(
        "/src/assets/displacement-texture.jpg"
      );

      const background = PIXI.Sprite.from(backgroundImage);

      const aspectRatio = backgroundImage.width / backgroundImage.height;
      background.width = app.screen.width;
      background.height = app.screen.width / aspectRatio;

      if (background.height < app.screen.height) {
        background.y = (app.screen.height - background.height) / 2;
      }

      const displacementSprite = PIXI.Sprite.from(displacementTexture);
      const displacementFilter = new PIXI.DisplacementFilter(
        displacementSprite
      );
      displacementSprite.texture.source.wrapMode = "repeat";
      displacementFilter.scale.set(35, 35);
      background.filters = [displacementFilter];

      app.stage.addChild(background);
      app.stage.addChild(displacementSprite);

      app.ticker.add(() => {
        displacementSprite.x++;
        if (displacementSprite.x > displacementSprite.width) {
          displacementSprite.x = 0;
        }
      });

      return app;
    };

    let applicationInstance: PIXI.Application | null = null;

    initApp().then((app) => {
      applicationInstance = app;
    });

    return () => {
      if (applicationInstance) {
        applicationInstance.destroy(true, { children: true });
      }
    };
  }, []);

  return (
    <div
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
};

export default BackgroundAnimationEffect;
