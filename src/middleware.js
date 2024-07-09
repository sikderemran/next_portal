export { default } from 'next-auth/middleware';

export const config = 
{ 
    matcher: 
        [
            /*********
             * regex start and end /
             * reverse(except) $!
             * match any chracter .
             * zero to many preceding chatacter *
             * escape \
             * match at the end $
             * or |
             ****/
            '/((?!.*\.svg$|.*\.jpg$|.*\.png$|login|register|signup|forgotpassword|aboutproduct|termscondition|terms.pdf|_next).*)/'
        ] 
}

