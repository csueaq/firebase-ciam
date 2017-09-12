/**
 * Created by x.jin on 12/09/2017.
 */

/**
 * Created by x.jin on 12/09/2017.
 */
import React from "react";
import Button from 'muicss/lib/react/button';

export default ({ action, label }) => {

    return (

        <Button onClick={ action }>{ label }</Button>
    )
}