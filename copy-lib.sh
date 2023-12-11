#!/usr/bin/env bash

if [[ -d ./../dream-of-components/libs/dof-react-lib/src/dof ]]; then
    rm -rf ./../dream-of-components/libs/dof-react-lib/src/dof
fi
mkdir ./../dream-of-components/libs/dof-react-lib/src/dof

cp -a src/lib/. ./../dream-of-components/libs/dof-react-lib/src/dof
