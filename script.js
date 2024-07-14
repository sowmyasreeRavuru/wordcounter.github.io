
document.getElementById('textInput').addEventListener('input', updateCounts);

function updateCounts() {
    const text = document.getElementById('textInput').value;
    
    document.getElementById('wordCount').textContent = countWords(text);
    document.getElementById('charCount').textContent = text.length;
    document.getElementById('paraCount').textContent = countParagraphs(text);
    document.getElementById('numberCount').textContent = countNumbers(text);
    document.getElementById('specialCharCount').textContent = countSpecialChars(text);
}

function countWords(text) {
    if (text.trim().length === 0) {
        return 0;
    }
    
    const cleanedText = text.replace(/\d+/g, '');
    return cleanedText.trim().split(/\s+/).filter(word => word.length > 0).length;
}

function countParagraphs(text) {
    if (text.trim().length === 0) {
        return 0;
    }
    return text.split(/\n+/).filter(paragraph => paragraph.trim().length > 0).length;
}

function countNumbers(text) {
    const numberPattern = /\d/g;
    const matches = text.match(numberPattern);
    return matches ? matches.length : 0;
}

function countSpecialChars(text) {
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/g;
    const matches = text.match(specialCharPattern);
    return matches ? matches.length : 0;
}
