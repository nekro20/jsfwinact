export default {
    changeState(cats, id, isAviable) {
        let index;
        let currentCat = cats.filter((p, i) => {
            let condition = p.id === id;
            if (condition) index = i;
            return condition;
        })[0];
        currentCat.aviable = isAviable;
        cats.splice(index, 1, currentCat);
        return cats;
    }
}