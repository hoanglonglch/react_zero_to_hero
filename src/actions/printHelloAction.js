export const PRINT_HELLO = "print:hello"

export const printHello = ()=>{
    return {
        type: PRINT_HELLO,
        payload:{
        message: 'Message from server'
        }
    };
}
