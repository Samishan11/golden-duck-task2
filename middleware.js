import {NextResponse} from 'next/server'

export default function middleware(req){

    let url = req.url;
    
    if (url.match('/dashboard')) {
        const session = req.cookies.get('Loggedin');
    

        
        if (session === "false" || session===undefined) {
            console.log('test')
            return NextResponse.redirect('http://localhost:3000');
        }
        else{
            console.log("logged in")
        }
      }

    return NextResponse.next();

}