const getLocalStorage = () => {
    const storeId = localStorage.getItem('card-id');
    if (storeId) {
        return JSON.parse(storeId)
    }
    else {
        return [];
    }
}

const setLocalStorage = id => {
    // console.log(id)
    const getStoreId = getLocalStorage();
    console.log(getStoreId)
    const exist = getStoreId.find(getStore => getStore === id);
    console.log(exist)
    if (!exist) {
        getStoreId.push(id);
        localStorage.setItem('card-id', JSON.stringify(getStoreId))
        return true
    }
    else {
        return false
    }
}

// Extra use for other needs not storage issu
const getCard = () => {
    const ids = getLocalStorage()
    // const hello = ids.reduce((a,b)=>a+b)
    // return hello;
    let num = 0;
    for(const is of ids){
        num = num +1
    }
    return num;
}


export { getLocalStorage, setLocalStorage, getCard }