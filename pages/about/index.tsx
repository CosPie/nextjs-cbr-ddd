import { useRequest } from 'ahooks';
import React from 'react';

const About = () => {
    const { data, error, loading } = useRequest(async()=>{
        const res = await fetch('http://10.38.100.111:8080/api/management/pilot_cabin_config/get_config_ui_json/?code=1&config_env_key=stable')

        return res.json()
    });

    if(error){
        return <div className=""> failed to load</div>
    }

    if(loading){
        return <div className="">loading</div>
    }


    return (
        <div>
            about:{data.msg}
        </div>
    )
}

export default About
