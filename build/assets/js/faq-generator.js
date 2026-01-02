/**
 * FAQ Generator - Dynamic FAQ Section with Thicker Icons
 * Generates accordion items from faqData array
 */

(function() {
    'use strict';

    // FAQ Item Template Generator
    function createFAQItem(faq) {
        const { id, question, answer, isOpen } = faq;
        const activeClass = isOpen ? 'active' : '';
        const contentClass = isOpen ? '' : 'hidden';

        return `
            <div class="hs-accordion ${activeClass} rounded-lg border border-transparent bg-light transition hs-accordion-active:border-gray-300 hs-accordion-active:bg-white dark:border-transparent dark:bg-dark-2 dark:hs-accordion-active:border-gray-700 dark:hs-accordion-active:bg-black">
                <button 
                    class="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-5 text-start text-lg font-medium text-dark transition hover:text-muted disabled:pointer-events-none disabled:opacity-50 hs-accordion-active:text-dark-2 dark:text-light/70 dark:hover:text-light dark:focus:outline-none dark:hs-accordion-active:text-dark-2 xl:text-2xl"
                    aria-controls="faq-answer-${id}"
                    aria-expanded="${isOpen}">
                    <span>${question}</span>
                    <span class="grid h-8 w-8 shrink-0 place-content-center rounded bg-white text-[#FFBD31] hs-accordion-active:bg-light dark:bg-black dark:hs-accordion-active:bg-dark-2 dark:hs-accordion-active:text-[#FFBD31]">
                        <svg class="block h-[17px] w-[17px] hs-accordion-active:hidden"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="3" stroke-linecap="round"
                            stroke-linejoin="round" aria-hidden="true">
                            <path d="M5 12h14" />
                            <path d="M12 5v14" />
                        </svg>
                        <svg class="hidden h-[17px] w-[17px] hs-accordion-active:block"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="3" stroke-linecap="round"
                            stroke-linejoin="round" aria-hidden="true">
                            <path d="M5 12h14" />
                        </svg>
                    </span>
                </button>
                <div 
                    id="faq-answer-${id}" 
                    class="hs-accordion-content ${contentClass} w-full overflow-hidden transition-[height] duration-300"
                    role="region"
                    aria-labelledby="faq-question-${id}">
                    <div class="px-6 pb-5">
                        <p class="text-base text-muted dark:text-light/70 xl:text-lg">
                            ${answer}
                        </p>
                    </div>
                </div>
            </div>
        `;
    }

    // Initialize FAQ Section
    function initFAQ() {
        const container = document.getElementById('faq-container');
        
        if (!container || typeof faqData === 'undefined') {
            console.warn('FAQ container or data not found');
            return;
        }

        // Generate HTML from data
        const faqHTML = faqData.map(faq => createFAQItem(faq)).join('');
        container.innerHTML = faqHTML;

        // Reinitialize Preline accordion after dynamic content
        if (window.HSAccordion) {
            HSAccordion.autoInit();
        }

        console.log(`✅ Generated ${faqData.length} FAQ items`);
    }

    // Run on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFAQ);
    } else {
        initFAQ();
    }

    // Expose for manual refresh if needed
    window.refreshFAQ = initFAQ;
})();
