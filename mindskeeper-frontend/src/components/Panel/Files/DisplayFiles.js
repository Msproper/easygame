import React from 'react';
import {Grid} from "@mui/material";
import FilesCard from "./FilesCard";

const DisplayFiles = ({files, setDetailMenu}) => {
    return (
        <Grid styles={styles} container alignItems="stretch" spacing={5}>
            {files?.map((file, index) => (
                <Grid key={index} style={{ marginTop: "60px" }} item sm={6} md={3} lg={3} >
                    <FilesCard index={index} file={file} setDetailMenu={setDetailMenu}/>
                </Grid>
            ))}
        </Grid>
    );
};


const styles = {
    marginTop: "10px",
}

export default DisplayFiles;