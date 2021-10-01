//STUDENT
export interface Student {
    School: number,
    age: number,
}

type Students = Record<string, Student>

export const Student: Students = {
    Akira: {
        School: 2,
        age: 7
    }
}

//Weapon

export interface Skill {
    element: string,
    name: string,
    lank: string,
}

export interface Weapon {
    element: string,
    type?: string,
    HP?: number,
    ATK?: number,
    skill: Record<number, Skill>
}



type Weapons = Record<string, Weapon>

export const Weapon: Weapons　= {
    Ixaba: {
        element: "火",
        skill: {
            1:{
                element: "火",
                name: "通常攻刃",
                lank: "II",
            }
        }

    }
}

