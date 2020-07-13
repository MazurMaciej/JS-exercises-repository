/*
Longest Sequence

Implement the function longestSequence(sequence)which takes a string of letters and finds the longest sequence where the same letter occurs continuously.

The function must return an object literal {c: n} where c is the lowercase character and n is the length of this sub-sequence.
If there are multiple characters with a continuous sequence of the same length, return the information for the letter which occurs first alphabetically.

Example outputs:
longest_sequence( &quot;dghhhmhmx&quot; ) === {h: 3}
longest_sequence( &quot;dhkkhhKKKt&quot; ) === {k: 3}
longest_sequence( &quot;aBbBadddadd&quot; ) === {b: 3}
*/

const longest_sequence = (text) => {
    if (text === '') return

    const result = text
        .split('')
        .reduce((result, next) => {
            const lastSequence = result[result.length - 1];
            if (lastSequence === undefined) {
                result.push({ char: next, size: 1 });
                return result;
            }

            if (lastSequence.char === next) {
                lastSequence.size++;
            } else {
                result.push({ char: next, size: 1 });
            }
            return result;
        }, []).reduce((result, next) => next.size > result.size ? next : next.char < result.char ? next : result);

    return { [result.char]: result.size };
}

longest_sequence('dghhhmhmx')
longest_sequence('dhkkhhKKKt')
longest_sequence('aBbBadddadd') 