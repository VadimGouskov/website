import * as React from "react";
type NotFoundProps = {};

const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center h-svw">
      <h1 className="text-xxxl font-bold text-black">404 Page Not Found</h1>
    </div>
  );
};

export default NotFound;
