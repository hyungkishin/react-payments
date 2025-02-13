import { useEffect } from "react";

interface UseInputFocusProps {
  refs: React.RefObject<HTMLInputElement>[];
  deps: React.DependencyList;
  maxLength: number;
}

const useCardInputAutoFocus = ({
  refs,
  deps,
  maxLength,
}: UseInputFocusProps) => {
  useEffect(() => {
    const focusedInput = refs.find(findActiveElement);
    const focusedInputIndex = refs.findIndex(findActiveElement);

    if (!focusedInput) {
      return;
    }

    const value = focusedInput.current?.value;
    const id = focusedInput.current?.id;

    if (maxLength === 0) {
      return;
    }

    if (value?.length === maxLength) {
      const nextInput = refs[focusedInputIndex + 1];

      if (id?.includes("cardNumber")) {
        const autufocusPrevious = refs.map((v) => v.current?.value).join("");

        if (autufocusPrevious.length === 16) {
          const nextRef = document.getElementById("cardExpirationDate1");
          if (nextRef) {
            nextRef.focus();
          }
        }
      }
      nextInput && nextInput.current?.focus();
    }

    if (value?.length === 0) {
      const previousInput = refs[focusedInputIndex - 1];

      previousInput && previousInput.current?.focus();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, maxLength]);
};

const findActiveElement = (ref: React.RefObject<HTMLInputElement>) =>
  document.activeElement === ref.current;

export default useCardInputAutoFocus;
