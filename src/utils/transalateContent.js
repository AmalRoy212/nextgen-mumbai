export const translateText = async (text, sourceLang, targetLang) => {
    const url = `https://www.apertium.org/apy/translate`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                q: text,
                langpair: `${sourceLang}|${targetLang}`
            })
        });
        const data = await response.json();
        if (data.responseStatus === 200 && data.responseData) {
            return data.responseData.translatedText;
        } else {
            console.error('Translation API did not return expected results:', data);
            return text; // Fallback to original text in case of API failure
        }
    } catch (error) {
        console.error('Error translating text:', error);
        return text; // Fallback to original text in case of network or other errors
    }
};
