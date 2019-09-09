import { useEffect } from "react";

/**
 * Simple hook to notify deprecated status. Please Point to the new component in your deprecation message
 * Deprecation severity: 1 - warn, 2 - error, 3 - break
 * @param {String} msg - message to display for the developer
 * @param {Number} stage - severity of deprecation.
 */
export function useDeprecated(
  msg = "Deprecated, Please use something else!",
  stage
) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      switch (stage) {
        case 0 :
          break;
        case 1:
          console.warn(msg);
          break;
        default:
        case 2:
          console.error(msg);
          break;
        case 3:
          throw new Error(msg);
      }
    }
  }, [msg, stage]);
}

export default useDeprecated;
