import { DetailProjectProps } from "@/interface/interface";

const PROJECTS: Array<Project> = [
  {
    id: 1,
    img: "/Icons/imgProject1.jpg",
    title: "مجمع زهور بغداد السكني",
    detailProject: {
      subtitle: "الخرسانة الجاهزة، ركيزة قوية لأحلام البناء المتينة",
      paragraph:
      "في عالم البناء الحديث، تلعب الخرسانة الجاهزة دورًا حيويًا في بناء المجتمعات والمنشآت.  نعتز بهذه الركيزة الأساسية التي تدعم البنية التحتية وتوفر الاستقرار والمتانة لكل مشروع. التطور والتكنولوجيا: نفخر بالتطور التكنولوجي الذي نقدمه في عملياتنا. نستثمر في أحدث التقنيات والمعدات لإنتاج خرسانة عالية الجودة والمتانة، مما يضمن استخدامها بفاعلية في جميع المشاريع. التخصيص والتنوع: نهتم بتلبية احتياجات كل مشروع، حيث نقدم مجموعة واسعة من الخرسانات الجاهزة المخصصة لمختلف التطبيقات. نفهم تمامًا أن تنوع المشاريع يتطلب تنوعًا في الحلول. الاستدامة والبيئة: نحن ملتزمون بالاستدامة وحماية البيئة. نضمن أن منتجاتنا تستوفي المعايير البيئية الصارمة وتساهم في بناء مجتمعات أكثر استدامة. الجودة والموثوقية: نحن نجمع بين الجودة والموثوقية في كل عملية. نضمن أن كل دفعة من الخرسانة الجاهزة تتجاوز التوقعات وتلبي أعلى معايير الصناعة. الختام: شركتنا تعتبر الخرسانة الجاهزة ركيزة أساسية للبناء الحديث. نحن هنا لدعم أحلام البناء القوية والمستدامة، ونعد بتقديم أفضل الحلول لكل مشروع يعتمد على قوة واستدامة الخرسانة.",
      img: [
        "/Icons/imgProject1.jpg",
        "/Icons/imgProject2.jpg",
        "/Icons/imgProject3.jpg",
        "/Icons/imgProject4.jpg",
      ],
    },
  },
  {
    id: 2,
    img: "/Icons/imgProject2.jpg",
    title: "مجمع دار السلام السكني",
    detailProject: {
      subtitle: "الخرسانة الجاهزة، ركيزة قوية لأحلام البناء المتينة",
      paragraph:
        "في عالم البناء الحديث، تلعب الخرسانة الجاهزة دورًا حيويًا في بناء المجتمعات والمنشآت.  نعتز بهذه الركيزة الأساسية التي تدعم البنية التحتية وتوفر الاستقرار والمتانة لكل مشروع. التطور والتكنولوجيا: نفخر بالتطور التكنولوجي الذي نقدمه في عملياتنا. نستثمر في أحدث التقنيات والمعدات لإنتاج خرسانة عالية الجودة والمتانة، مما يضمن استخدامها بفاعلية في جميع المشاريع. التخصيص والتنوع: نهتم بتلبية احتياجات كل مشروع، حيث نقدم مجموعة واسعة من الخرسانات الجاهزة المخصصة لمختلف التطبيقات. نفهم تمامًا أن تنوع المشاريع يتطلب تنوعًا في الحلول. الاستدامة والبيئة: نحن ملتزمون بالاستدامة وحماية البيئة. نضمن أن منتجاتنا تستوفي المعايير البيئية الصارمة وتساهم في بناء مجتمعات أكثر استدامة. الجودة والموثوقية: نحن نجمع بين الجودة والموثوقية في كل عملية. نضمن أن كل دفعة من الخرسانة الجاهزة تتجاوز التوقعات وتلبي أعلى معايير الصناعة. الختام: شركتنا تعتبر الخرسانة الجاهزة ركيزة أساسية للبناء الحديث. نحن هنا لدعم أحلام البناء القوية والمستدامة، ونعد بتقديم أفضل الحلول لكل مشروع يعتمد على قوة واستدامة الخرسانة.",
      img: [
        "/Icons/imgProject2.jpg",
        "/Icons/imgProject3.jpg",

      ],
    },
  },
  {
    id: 3,
    img: "/Icons/imgProject3.jpg",
    title: "معمل حديد النهروان",
    detailProject: {
      subtitle: "الخرسانة الجاهزة، ركيزة قوية لأحلام البناء المتينة",
      paragraph:
      "في عالم البناء الحديث، تلعب الخرسانة الجاهزة دورًا حيويًا في بناء المجتمعات والمنشآت.  نعتز بهذه الركيزة الأساسية التي تدعم البنية التحتية وتوفر الاستقرار والمتانة لكل مشروع. التطور والتكنولوجيا: نفخر بالتطور التكنولوجي الذي نقدمه في عملياتنا. نستثمر في أحدث التقنيات والمعدات لإنتاج خرسانة عالية الجودة والمتانة، مما يضمن استخدامها بفاعلية في جميع المشاريع. التخصيص والتنوع: نهتم بتلبية احتياجات كل مشروع، حيث نقدم مجموعة واسعة من الخرسانات الجاهزة المخصصة لمختلف التطبيقات. نفهم تمامًا أن تنوع المشاريع يتطلب تنوعًا في الحلول. الاستدامة والبيئة: نحن ملتزمون بالاستدامة وحماية البيئة. نضمن أن منتجاتنا تستوفي المعايير البيئية الصارمة وتساهم في بناء مجتمعات أكثر استدامة. الجودة والموثوقية: نحن نجمع بين الجودة والموثوقية في كل عملية. نضمن أن كل دفعة من الخرسانة الجاهزة تتجاوز التوقعات وتلبي أعلى معايير الصناعة. الختام: شركتنا تعتبر الخرسانة الجاهزة ركيزة أساسية للبناء الحديث. نحن هنا لدعم أحلام البناء القوية والمستدامة، ونعد بتقديم أفضل الحلول لكل مشروع يعتمد على قوة واستدامة الخرسانة.",
      img: [
        "/Icons/imgProject5.jpg",
      ],
    },
  },
  {
    id: 4,
    img: "/Icons/imgProject4.jpg",
    title: "مجسر الرستمية",
    detailProject: {
      subtitle: "الخرسانة الجاهزة، ركيزة قوية لأحلام البناء المتينة",
      paragraph:
      "في عالم البناء الحديث، تلعب الخرسانة الجاهزة دورًا حيويًا في بناء المجتمعات والمنشآت.  نعتز بهذه الركيزة الأساسية التي تدعم البنية التحتية وتوفر الاستقرار والمتانة لكل مشروع. التطور والتكنولوجيا: نفخر بالتطور التكنولوجي الذي نقدمه في عملياتنا. نستثمر في أحدث التقنيات والمعدات لإنتاج خرسانة عالية الجودة والمتانة، مما يضمن استخدامها بفاعلية في جميع المشاريع. التخصيص والتنوع: نهتم بتلبية احتياجات كل مشروع، حيث نقدم مجموعة واسعة من الخرسانات الجاهزة المخصصة لمختلف التطبيقات. نفهم تمامًا أن تنوع المشاريع يتطلب تنوعًا في الحلول. الاستدامة والبيئة: نحن ملتزمون بالاستدامة وحماية البيئة. نضمن أن منتجاتنا تستوفي المعايير البيئية الصارمة وتساهم في بناء مجتمعات أكثر استدامة. الجودة والموثوقية: نحن نجمع بين الجودة والموثوقية في كل عملية. نضمن أن كل دفعة من الخرسانة الجاهزة تتجاوز التوقعات وتلبي أعلى معايير الصناعة. الختام: شركتنا تعتبر الخرسانة الجاهزة ركيزة أساسية للبناء الحديث. نحن هنا لدعم أحلام البناء القوية والمستدامة، ونعد بتقديم أفضل الحلول لكل مشروع يعتمد على قوة واستدامة الخرسانة.",
      img: [
        "/Icons/imgProject4.jpg",
        "/Icons/imgProject6.jpg",
        "/Icons/imgProject7.jpg",
      ],
    },
  },
];

export type Project = {
  id: number;
  img: string;
  title: string;
  detailProject: DetailProjectProps;
};

export default PROJECTS;
