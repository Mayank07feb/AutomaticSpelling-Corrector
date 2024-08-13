export const checkSpelling = async (text) => {
  try {
    const response = await fetch('https://api.languagetool.org/v2/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        text: text,
        language: 'en-US', // Adjust the language parameter if needed
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Network response was not ok. Status: ${response.status}, Message: ${errorText}`);
    }

    const data = await response.json();
    console.log('API Response Data:', data); // Log the response data for debugging
    return data;
  } catch (error) {
    console.error('Error checking spelling:', error);
    return { matches: [] }; // Return an empty matches array in case of an error
  }
};
