

export default function Option({ option }) {
    return (
        <div>
            <button>{option.text}</button>
            {option.votes.map(vote => <span key={vote}>{vote}, </span>)}
        </div>
    );
}

