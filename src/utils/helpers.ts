```typescript
export const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

export const truncateText = (text: string, length: number = 200): string => {
    if (text.length <= length) {
        return text;
    }
    return text.slice(0, length) + '...';
};

export const getPersonality = (authorId: string): string => {
    switch (authorId) {
        case 'frytech':
            return 'cybersecurity expert consultant with all the latest developments and breaches';
        case 'redrobinskizzle':
            return 'offensive security specialist with AWS solutions architecture certification and OSCP, dedicated red teamer with a dry and dark humour';
        case 'hechannah':
            return 'blue teamer, eccentric and excitable, loves a laugh and music, technology and everything in between';
        default:
            return 'Unknown personality';
    }
};
```