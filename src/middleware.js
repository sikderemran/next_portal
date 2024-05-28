export { default } from 'next-auth/middleware';

export const config = 
{ 
    matcher: 
        [
            /*********
             * regex start and end /
             * reverse(except) $!
             * match any chracter .
             * zero to many *
             * escape \
             * match at the end $
             * or |
             ****/
            '/((?!.*\.svg$|.*\.jpg$|.*\.png$|login|register|_next).*)'
        ] 
}

