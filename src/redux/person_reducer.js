const init = []


export default function personReducer(preState = init, action) {
    const { type, data } = action
    switch (type) {
        case 'addperson':
            return [data, ...preState]
        case 'deleteperson':
            return preState.filter(e => e.id !== data)
        case 'initstate':
            return init;
        case 'editperson':

            const { firstName, lastName, sex, age } = data.user
            const newState = preState.map((preState) => data.id === preState.id ? { ...preState, firstName: firstName, lastName: lastName, sex: sex, age: age, } : preState)
            return newState

        case 'changedisplay':
            const twoState = preState.map(e => 1 === 1 ? { ...e, display: true } : e)

            for (let i = 0; i < twoState.length; i++) {
                for (let j = 0; j < data.length; j++) {
                    if (twoState[i].id == data[j].id) {

                        twoState[i].display = false;
                      
                    }
                }
            }
            twoState.forEach(e=>e.display=!e.display)

            return twoState
        default:
            return preState
    }
}