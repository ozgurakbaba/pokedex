
export default function PokedexNav ({ pid, prev, next }) {
    // console.log(pid);   // -- testing
    return (
        <div className="navigation">
            <button type="button" title="Prev" onClick={prev}>Prev</button>
            <button type="button" title="Next" onClick={next}>Next</button>
        </div>
    );
}