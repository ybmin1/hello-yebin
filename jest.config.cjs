module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.(png|jpg|jpeg|gif|svg)$": "jest-transform-stub", // 이미지 파일 변환 설정 추가
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(png|jpg|jpeg|gif|svg)$": "jest-transform-stub", // 이미지 파일 매핑 설정 추가
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
};
