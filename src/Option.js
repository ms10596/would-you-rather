

function Option({ option }) {
    return (
        <div>
            <h1>{option.votes.map(vote => <h1 key={vote}>{vote}</h1>)}</h1>
            <h1>{option.text}</h1>
        </div>
    );
}

export default Option;
