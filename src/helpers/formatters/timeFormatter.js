export default function formattedTime( time ){
    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;

    if( typeof(minutes) !== 'number' || typeof(seconds) !== 'number'){
        return "";
    } else {
        return(`${ withLeadingZero( minutes ) }:${ withLeadingZero( seconds.toFixed(0) ) }`);
    }
}

function withLeadingZero(amount){
    if (amount < 10 ){
        return `0${ amount }`;
    } else {
        return `${ amount }`;
    }
}