import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState, selectStep } from "../store/store";
import CommonHomeButton from "@/common/CommonHomeButton";

// const steps = [
//   {
//     id: 1,
//     icon: "🌐",
//     title: "Sync your code to us",
//     description:
//       "GitLab, GitHub, or Bitbucket. We will automatically run security scans on your code.",
//   },
//   {
//     id: 2,
//     icon: "🔍",
//     title: "Run quality checks",
//     description:
//       "Find vulnerabilities, performance issues, and potential bugs in your codebase.",
//   },
//   {
//     id: 3,
//     icon: "🌍",
//     title: "View findings and improve your code",
//     description:
//       "Get detailed reports with actionable insights to improve your code quality.",
//   },
//   {
//     id: 4,
//     icon: "👥",
//     title: "Build stronger teams",
//     description:
//       "Share knowledge and collaborate with your team to build better software.",
//   },
// ];

// const useCases = [
//   {
//     icon: "💻",
//     title: "Development teams",
//     subtitle: "Ship code faster",
//     description:
//       "Automate code reviews and catch issues before they reach production.",
//   },
//   {
//     icon: "🔒",
//     title: "Security teams",
//     subtitle: "Secure by design",
//     description:
//       "Identify security vulnerabilities and compliance issues early in development.",
//   },
//   {
//     icon: "🚀",
//     title: "DevOps engineers",
//     subtitle: "Streamline CI/CD",
//     description:
//       "Integrate security and quality checks directly into your deployment pipeline.",
//   },
//   {
//     icon: "👨‍💼",
//     title: "Engineering managers",
//     subtitle: "Track progress",
//     description:
//       "Get visibility into code quality metrics and team productivity.",
//   },
// ];

// const paymentSteps = [
//   { step: 1, title: "Find a Phantom Wallet Portal (+ contact)", checked: true },
//   {
//     step: 2,
//     title: "Send cryptocurrency (BTC, LTC, Monero-only)",
//     checked: false,
//   },
//   { step: 3, title: "Deliver instant information", checked: false },
//   { step: 4, title: "Instant PO transferred", checked: false },
// ];

const HowItWorks: React.FC = () => {
  // const dispatch = useDispatch();
  // const selectedStep = useSelector(
  //   (state: RootState) => state.howItWorks.selectedStep
  // );

  return (
    <div className="mx-auto px-4 lg:py-6 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-[#3d314c]">
          From sign up to cash-out in minutes.
        </h2>
        <p className="text-gray-600 text-sm mb-6">
          Join thousands of developers who trust our platform to improve their
          code quality and security.
        </p>
        <div className="flex gap-3">
          <CommonHomeButton isInView={true} title="Join The Waitlist" />
          <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
            View Demo
          </button>
        </div>
      </div>

      {/* How It Works Steps */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-8 text-gray-900">
          How does gitbaty actually work?
        </h3>
        <p className="text-gray-600 text-sm mb-8">
          Get started quickly in just four steps.
        </p>
        {/* <div className="grid grid-cols-4 gap-6 mb-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`text-center cursor-pointer group p-4 rounded-lg border ${
                selectedStep === step.id
                  ? "border-purple-600 bg-purple-50"
                  : "border-gray-200"
              }`}
              onClick={() => dispatch(selectStep(step.id))}
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors">
                <span className="text-2xl">{step.icon}</span>
              </div>
              <h4 className="font-medium text-gray-900 mb-2 text-sm">
                {step.title}
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div> */}
      </div>

      {/* Use Cases */}
      {/* <div className="mb-12">
        <h3 className="text-xl font-semibold mb-8 text-gray-900">
          When can you use gitbaty?
        </h3>
        <div className="grid grid-cols-4 gap-4">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                <span className="text-xl">{useCase.icon}</span>
              </div>
              <h4 className="font-semibold text-gray-900 text-sm mb-1">
                {useCase.title}
              </h4>
              <p className="text-purple-600 text-xs font-medium mb-2">
                {useCase.subtitle}
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div> */}

      {/* Payment Steps */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">
          Powered by Phantom (Light Tech Pack)
        </h3>
        {/* <div className="space-y-3">
          {paymentSteps.map((item) => (
            <div key={item.step} className="flex items-center gap-3">
              <div className="w-6 h-6 border-2 border-gray-300 rounded flex items-center justify-center">
                <span className="text-xs font-medium text-gray-600">
                  {item.step}
                </span>
              </div>
              <span className="text-sm text-gray-700">{item.title}</span>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default HowItWorks;
