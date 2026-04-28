document.addEventListener('DOMContentLoaded', initCopyButtons);

function initCopyButtons() {
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(addCopyButton);
}

function addCopyButton(code) {
    const wrapper = code.parentElement;
    const button = createCopyButton();

    button.addEventListener('click', () => copyCode(code, button));

    wrapper.style.position = 'relative';
    wrapper.appendChild(button);
}

function createCopyButton() {
    const button = document.createElement('button');
    button.textContent = 'Copy';
    button.className = 'copy-button';

    button.style.position = 'absolute';
    button.style.bottom = '5px';
    button.style.right = '5px';
    button.style.background = '#f0f0f0';
    button.style.border = '1px solid #ccc';
    button.style.padding = '2px 6px';
    button.style.cursor = 'pointer';

    return button;
}

async function copyCode(code, button) {
    const text = code.textContent;

    try {
        await navigator.clipboard.writeText(text);
        showCopied(button);
    } catch (err) {
        console.error('Failed to copy:', err);
    }
}

function showCopied(button) {
    button.textContent = 'Copied!';
    setTimeout(() => {
        button.textContent = 'Copy';
    }, 2000);
}
