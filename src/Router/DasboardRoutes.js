import  React from 'react'
import { Home } from '../Components/Home'
import { Navbar } from '../Components/Ui/Navbar'
import { Switch , Redirect , Route} from 'react-router-dom'

export const DasboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div>
                <Switch>
                    <Route exact path="/home" component={Home} />
                </Switch>
                <Redirect to="/home" component={Home}/>
            </div>
        </>
    )
}
