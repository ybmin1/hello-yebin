import { useRef } from "react";

import Button from "./Button";

interface DownloadCVProps {
  pdfPath?: string;
  fileName?: string;
  buttonText?: string;
  className?: string;
}

const DownloadCV = ({
  pdfPath = "/CV_Yebin_Min.pdf",
  fileName = "CV_Yebin_Min.pdf",
  buttonText = "Download CV",
  className = "",
}: DownloadCVProps) => {
  const downloadLinkRef = useRef<HTMLAnchorElement | null>(null);
  const handleDownload = () => {
    if (downloadLinkRef.current) {
      downloadLinkRef.current.click();
    }
  };

  return (
    <div>
      <a
        ref={downloadLinkRef}
        href={pdfPath}
        download={fileName}
        style={{ display: "none" }}
      />
      <Button onClick={handleDownload} className={className}>
        {buttonText}
      </Button>
    </div>
  );
};

export default DownloadCV;
