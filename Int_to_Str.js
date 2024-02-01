let intToName = (int_in_str) => { //1234

    let withData = (int_in_str, data) => {
        // to replace any comma in str with ""
        let replaceElements = (str, old_element, new_element) => { // will take string
            let count = 0
        
            for (let i of str) {
                if (i==`${old_element}`) {
                    count++
                }
            }
        
            for (let i=0; i<count; i++) {
                str = str.replace(`${old_element}`, `${new_element}`)
            }
        
            return(str) // but in numbers form
        }

        
        int_in_str = replaceElements(int_in_str, ",", "")

        let name = ""

        let tens_mix = [4, 6, 8, 10]

        let run = true
    
        for (let i = 0; i < int_in_str.length; i++) { // main loop for numbers given from start to end
            if (run == true) {
                let after = int_in_str.length - i - 1
    
                let suffix = true // to see if it fall into tens or not, if tens no sufix needed
    
                let tens = false
                
                // console.log(after);
                // console.log(name);

    
                if (after == 0 || int_in_str[i] == 0) {
                    suffix = false
    
                    if (int_in_str[i] != 0) {
                        var after_name = data.num_data[int_in_str[i]]
                    }else {
                        var after_name = ""
                    }  
                }else if (after == 1) {
                    suffix = false
                    tens = true
    
                    // console.log("af1");
                    
                    if (int_in_str[i]==1) {
                        let next = int_in_str[i+1]
                        let both = `1${next}`
                        
                        var after_name = data.num_tens_data.num_tens_one_data[both]
    
                        run = false //to skip next iteration
                    }else {
                        var after_name = data.num_tens_data[int_in_str[i]]
                    }
                }else if (tens_mix.includes(after)) {
                    suffix = true
                    tens = true
                    
                    // console.log("af2");
                    
                    if (int_in_str[i]==1) {
                        let next = int_in_str[i+1]
                        let both = `1${next}`
                        
                        var after_name = `${data.num_tens_data.num_tens_one_data[both]} ${data.after_data[after-1]} `
                        
                        // console.log(after_name);
                        run = false //to skip next iteration
                    }else if (int_in_str[i+1] == 0) {
                        var after_name = data.after_data[after-1]
                        // name += `${after_name} `
                    }else {
                        var after_name = ""
                    }
                }else {
                    // console.log("af3");
                    var after_name = data.after_data[after]
                }
                
                if (suffix == true && tens == true) {
                    if (int_in_str[i]==1){
                        name += `${after_name} `
                    }else{
                        name += `${data.num_tens_data[int_in_str[i]]} ${after_name} `
                    }
                }else if (suffix == true) {
                    name += `${data.num_data[int_in_str[i]]} ${after_name} `
                }else {
                    name += `${after_name} `
                }
            }

            else {
                run = true
            }
            // console.log(name);
        }


        let capitaliseFirstLetter = (str) => {
            let final = ""
        
            for (let i of str.split(" ")) {
                const temp = `${i[0].toUpperCase()}${i.substr(1, i.length)}` // main algorithm
                final += `${temp} `
            }
        
            return final.substr(0, final.length-1) // deleating extra space at last part of str
        }


        let removeElements = (ls, element = "") => { // will take list
            // First counting how many element in the list we want to remove then deleting it
            let count = 0
        
            for (let i of ls) {
                if (i==`${element}`) {
                    count++
                }
            }
            
            for (let i=0; i<count; i++) {
                let temp = ls.indexOf(`${element}`)
                ls.splice(temp, 1)
            }
        
            // Now converting list items in str with single space in btw
            let final = ""
        
            for (let i of ls) {
                final += `${i} `
            }
        
            final = final.substr(0, final.length-1) // deleating extra space at last part of str
        
            return final // returning str
        }

        return capitaliseFirstLetter(removeElements(name.split(" "), ""))
        // console.log(temp);
    }

    let data = {
        num_data : {
            0 : "zero",
            1 : "one",
            2 : "two",
            3 : "three",
            4 : "four",
            5 : "five",
            6 : "six",
            7 : "seven",
            8 : "eight",
            9 : "nine",
        },

        num_tens_data : {
            num_tens_one_data : {
                10 : "ten",
                11 : "eleven",
                12 : "twelve",
                13 : "thirteen",
                14 : "foreteen",
                15 : "fifteen",
                16 : "sixteen",
                17 : "seventeen",
                18 : "eighteen",
                19 : "nineteen",
            },
            2 : "twenty",
            3 : "thirty",
            4 : "fourty",
            5 : "fifty",
            6 : "sixty",
            7 : "seventy",
            8 : "eighty",
            9 : "ninety",
        },


        after_data : {
        1 : "tens",
        2 : "hundred",
        3 : "thousand",
        4 : "mix",
        5 : "lakh",
        6 : "mix",
        7 : "crore",
        8 : "mix",
        9 : "arab",
        10 : "mix",
        }
    }

    return withData(int_in_str, data)
}


export default intToName;

// Like This
// console.log(intToName("1,41,51,600"))