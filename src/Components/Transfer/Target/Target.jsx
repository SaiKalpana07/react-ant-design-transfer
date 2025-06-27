import PropTypes from "prop-types";
import React, { useEffect, useMemo, useRef, useState } from "react";

function Target({target}) {
    console.log('t',target)
    return (
        <>
        </>
    )
}

Target.propTypes = {
    target:PropTypes.array
}

export default Target;