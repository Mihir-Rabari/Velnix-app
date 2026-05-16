import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface TextifyAnimationConfig {
  by: "lines" | "words" | "chars";
  stagger: number;
  duration: number;
  ease: string;
  transformOrigin: string;
  animateProps: Record<string, string | number>;
}

interface TextifyConfig {
  el: string;
  splitType: "lines" | "words" | "chars";
  largeText?: boolean;
  animation: TextifyAnimationConfig;
}

export class Textify {
  private instances: SplitText[] = [];

  constructor(config: TextifyConfig, gsapRef: typeof gsap) {
    const elements = document.querySelectorAll(config.el);

    elements.forEach((el) => {
      const split = new SplitText(el as HTMLElement, {
        type: config.splitType,
        linesClass: "textify-line",
        wordsClass: "textify-word",
        charsClass: "textify-char",
      });
      this.instances.push(split);

      let targets: Element[];
      switch (config.animation.by) {
        case "lines":
          targets = split.lines;
          break;
        case "words":
          targets = split.words;
          break;
        case "chars":
          targets = split.chars;
          break;
        default:
          targets = split.lines;
      }

      // Wrap each line/word in a clip container
      if (config.animation.by === "lines") {
        targets.forEach((line) => {
          const wrapper = document.createElement("div");
          wrapper.style.overflow = "hidden";
          wrapper.style.display = "block";
          line.parentNode?.insertBefore(wrapper, line);
          wrapper.appendChild(line);
        });
      }

      // Set initial state
      gsapRef.set(targets, {
        y: 40,
        opacity: 0,
        transformOrigin: config.animation.transformOrigin,
      });

      // Animate on scroll
      gsapRef.to(targets, {
        y: 0,
        opacity: 1,
        duration: config.animation.duration,
        stagger: config.animation.stagger,
        ease: config.animation.ease,
        scrollTrigger: {
          trigger: el as HTMLElement,
          start: "top 85%",
          once: true,
        },
      });
    });
  }

  revert() {
    this.instances.forEach((split) => split.revert());
  }
}
