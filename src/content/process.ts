import { images, type Img } from "./images";

/**
 * How we make it (plan §3.5). Four steps, each with a real photograph rather
 * than an icon. One sentence each — this section earns trust by looking real,
 * not by explaining.
 */
export type Step = {
  number: string;
  title: string;
  body: string;
  image: Img;
};

export const steps: Step[] = [
  {
    number: "01",
    title: "Measure & consult",
    body: "We measure on site anywhere in Sydney, or work from your templates and tech pack.",
    image: images.stepMeasure,
  },
  {
    number: "02",
    title: "Cut & sew",
    body: "Cut to your drop on our own tables, then sewn by the people who cut it.",
    image: images.stepCut,
  },
  {
    number: "03",
    title: "Finish & quality check",
    body: "Pressed, weighted and checked at each stage rather than only at the end.",
    image: images.stepFinish,
  },
  {
    number: "04",
    title: "Deliver & install",
    body: "Delivered across Sydney, and installed by our own team where you need us.",
    image: images.stepInstall,
  },
];
