'use client';

import Link from 'next/link';

export default function Home() {
  const copyToClipboard = () => {
    const text = `I am creating a project on Claude/ChatGPT. I want you to help me write instructions for the project. I will provide details below regarding the project. Ask me any question you might need to write the instructions better.


your role:

I want to achieve (my goal):

this project is for: <project details goes here>

context: <all the contextual information>`;
    navigator.clipboard.writeText(text);
    alert('Template copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            AI Prompt Engineering Resources
          </h1>
          <p className="text-xl text-gray-600">
            Master the art of crafting effective AI prompts
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Canva Link Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Course Materials</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Access the complete visual presentation and course materials on Canva
            </p>
            <Link
              href="https://canva.link/jht0wqy3jgka0oe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Open Canva Presentation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>

          {/* Prompt Template Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 p-3 rounded-lg">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Prompt Engineering Template</h2>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Use this structured template to create effective prompts for Claude/ChatGPT projects.
                This framework helps AI understand your goals and deliver better results.
              </p>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-5 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    📋 Prompt Structure
                  </h3>
                  <div className="space-y-4 font-mono text-sm">
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      <p className="text-gray-800 mb-2">
                        I am creating a project on Claude/ChatGPT. I want you to help me write instructions for the project.
                        I will provide details below regarding the project. Ask me any question you might need to write the instructions better.
                      </p>
                    </div>

                    <div className="grid gap-4 mt-4">
                      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                        <p className="font-semibold text-green-900 mb-2">🎯 Your Role:</p>
                        <p className="text-gray-700 italic">[Define what role the AI should take]</p>
                      </div>

                      <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
                        <p className="font-semibold text-amber-900 mb-2">🎯 I Want to Achieve (My Goal):</p>
                        <p className="text-gray-700 italic">[State your specific objective]</p>
                      </div>

                      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                        <p className="font-semibold text-purple-900 mb-2">📁 This Project is For:</p>
                        <p className="text-gray-700 italic">[Project details go here]</p>
                      </div>

                      <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
                        <p className="font-semibold text-indigo-900 mb-2">📚 Context:</p>
                        <p className="text-gray-700 italic">[All the contextual information]</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    💡 Tips for Better Prompts
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Be specific about the role you want the AI to play</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Clearly state your end goal and success criteria</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Provide relevant context and constraints</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Encourage the AI to ask clarifying questions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Copy Template Button */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              📋 Quick Copy Template
            </h3>
            <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm border border-gray-200">
              <pre className="whitespace-pre-wrap text-gray-800">
{`I am creating a project on Claude/ChatGPT. I want you to help me write instructions for the project. I will provide details below regarding the project. Ask me any question you might need to write the instructions better.


your role:

I want to achieve (my goal):

this project is for: <project details goes here>

context: <all the contextual information>`}
              </pre>
            </div>
            <button
              onClick={copyToClipboard}
              className="mt-4 bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy Template to Clipboard
            </button>
          </div>
        </div>

        <footer className="text-center mt-16 text-gray-600">
          <p className="text-sm">
            © {new Date().getFullYear()} AI Prompt Engineering Training | Happy Learning! 🚀
          </p>
        </footer>
      </div>
    </div>
  );
}
