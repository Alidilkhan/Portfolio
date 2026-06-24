import { useEffect, useState } from "react";

export function useTypewriter(words, speed = 80, pause = 1400) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words?.length) {
      return undefined;
    }

    const currentWord = words[index % words.length];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const nextText = currentWord.slice(0, text.length + 1);
          setText(nextText);
          if (nextText === currentWord) {
            setDeleting(true);
          }
        } else {
          const nextText = currentWord.slice(0, text.length - 1);
          setText(nextText);
          if (!nextText) {
            setDeleting(false);
            setIndex((value) => value + 1);
          }
        }
      },
      deleting ? speed / 2 : text === currentWord ? pause : speed,
    );

    return () => clearTimeout(timeout);
  }, [deleting, index, pause, speed, text, words]);

  return text;
}
