import ModelOpsClient from "./ModelOpsClient";

export const metadata = {
    title: "ModelOps & ML Engineering — Samprakshi Infinity Solution",
    description:
        "Production-grade MLOps and ML engineering: model serving, CI/CD, monitoring, feature stores, data pipelines and governance.",
    keywords: [
        "MLOps",
        "model deployment",
        "monitoring",
        "feature store",
        "model serving",
        "CI/CD",
        "ML engineering",
        "top trending: model ops jobs",
    ],
    openGraph: {
        title: "ModelOps & ML Engineering — Samprakshi Infinity Solution",
        description:
            "Production-grade MLOps and ML engineering: model serving, CI/CD, monitoring, feature stores, data pipelines and governance.",
        url: "https://samprakshiinfinitysolution.com/development/machine-learning-ai/model-ops-development",
    },
};

export default function Page() {
    return <ModelOpsClient />;
}
