BUILD_DIR=./build/.
DEPLOY_DIR=/x/bsclib/site/

npm run build
echo "Copying ${BUILD_DIR} to ${DEPLOY_DIR}"
cp -a $BUILD_DIR $DEPLOY_DIR