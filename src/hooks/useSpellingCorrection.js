import { useState, useEffect } from 'react';
import { checkSpelling } from '../utils/api';

const useSpellingCorrection = (text) => {
  const [correctedText, setCorrectedText] = useState(text);

  useEffect(() => {
    const fetchCorrections = async () => {
      if (text) {
        const result = await checkSpelling(text);
        console.log('API Response:', result); // Log the raw API response

        let newText = text;
        const corrections = result.matches || []; // Ensure matches is an array

        // Create a list of all corrections to be applied
        let correctionsList = corrections.map(match => {
          const { offset, length, replacements } = match;
          console.log('Match Details:', match); // Log each match detail
          if (replacements && replacements.length > 0) {
            return {
              offset,
              length,
              replacement: replacements[0].value
            };
          }
          return null;
        }).filter(correction => correction !== null);

        console.log('Corrections List:', correctionsList); // Log the corrections list

        // Sort corrections by offset in descending order to handle overlapping corrections
        correctionsList.sort((a, b) => b.offset - a.offset);

        correctionsList.forEach(correction => {
          const { offset, length, replacement } = correction;
          // Replace occurrences of the misspelled word
          newText = newText.substring(0, offset) + replacement + newText.substring(offset + length);
          console.log(`Applying replacement: ${replacement} at offset ${offset}`); // Log each replacement
        });

        // Set the corrected text
        setCorrectedText(newText);
      }
    };

    fetchCorrections();
  }, [text]);

  return { correctedText };
};

export default useSpellingCorrection;
