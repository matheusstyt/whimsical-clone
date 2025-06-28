export const articles = {
  "getting-started/sequence-diagrams": {
    title: "Getting started with sequence diagrams",
    breadcrumb: ["Help Center", "Getting started", "Getting started with sequence diagrams"],
    summary: [
      { title: "Getting started with sequence diagrams", id: "getting-started" },
      { title: "How to create a sequence diagram", id: "how-to-create" },
    ],
    content: `
      <div class="mb-8">
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          A <a href="#" class="text-purple-600 hover:text-purple-700 underline">sequence diagram</a> is a type of UML (Unified Modeling Language) diagram that shows the interactions between various components or objects in a system. It provides a visual representation of the order of messages or events over time.
        </p>
      </div>

      <div class="mb-12">
        <div class="bg-purple-600 rounded-lg overflow-hidden shadow-lg">
          <div class="aspect-video bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center relative">
            <div class="absolute inset-0 bg-black bg-opacity-20"></div>
            <div class="relative z-10 text-center text-white">
              <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <div class="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-white ml-1"></div>
              </div>
              <p class="text-sm opacity-90 mb-2">WHAT'S NEW</p>
              <h3 class="text-2xl font-bold">Creating sequence diagrams in Whimsical</h3>
            </div>
          </div>
        </div>
      </div>

      <div id="how-to-create" class="scroll-mt-24">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-between">
          How to create a sequence diagram
          <button class="flex items-center space-x-2 text-sm text-gray-500 hover:text-gray-700 transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
            </svg>
            <span>Copy Link</span>
          </button>
        </h2>
        <div class="prose prose-lg max-w-none">
          <p class="text-gray-700 leading-relaxed mb-4">
            Creating sequence diagrams in Whimsical is straightforward and intuitive. Follow these steps to get started:
          </p>
          <ol class="list-decimal list-inside space-y-3 text-gray-700">
            <li>Open Whimsical and create a new board</li>
            <li>Select the sequence diagram template from the template library</li>
            <li>Add actors and objects to your diagram</li>
            <li>Connect them with messages and interactions</li>
            <li>Customize the styling and layout as needed</li>
          </ol>
        </div>
      </div>
    `,
  },
}
