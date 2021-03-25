import { map, Matcher, redirect} from "navi";
import { isContext } from "node:vm";

interface Context {
    token: string;
}

export function withAuthentication(matcher: Matcher<{}, Context>){
    return map((_, context: Context) => context.token ? matcher : redirect('/login'))
}