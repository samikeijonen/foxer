#!/bin/bash
# Theme setup based on aucor-starter. https://github.com/aucor/aucor-starter

# Defaults
default_name="Foxer"
default_id="foxer"
default_url="foxland-products.local/"
default_locale="fi"

# Directories
basedir="$( cd "$( dirname "$0" )" && pwd )/."
assetsdir="$basedir/assets"
sassdir="$assetsdir/sass"
basedir_all_files="$basedir/."
setup_script="$basedir/setup.sh"

# Text styles
bold=$(tput bold)
white=$(tput setaf 7)
pink=$(tput setaf 198)
green=$(tput setaf 2)
txtreset=$(tput sgr0)

echo "${bold}
        Let's start, shall we.
      ${txtreset}"

echo "1) Set name for your theme. (Default: $default_name)"
read name
# use default if empty
if test -n "$name"; then
  echo ""
else
  id=$default_name
fi

echo "2) Set unique id for your theme. Use only a-z and _. (Default: $default_id)"
read id

# use default if empty
if test -n "$id"; then
  echo ""
else
  id=$default_id
fi

echo "3) Set local development url. (Default: $default_url)"
read url

# use default if empty
if test -n "$url"; then
  echo ""
else
  url=$default_url
fi

while true; do
read -p "4) Is following information correct?

name: ${bold}${pink}$name${txtreset} (Default: $default_name)
id: ${bold}${pink}$id${txtreset} (Default: $default_id)
url: ${bold}${pink}$url${txtreset} (Default: $default_url)

Proceed to install? [y/N]
" yn
  case $yn in
    [Yy]* ) break;;
    [Nn]* ) exit;;
    * ) echo "Please answer y or n.";;
  esac
done

echo "
Run setup:
=========="

# style.scss
find "$sassdir" -name 'style.scss' -type f -exec perl -p -i -e "s|$default_name|$name|g" {} \;

# PHP files
find "$basedir_all_files" -name '*.php' -type f -exec perl -p -i -e "s|$default_name|$name|g" {} \;

# config.js
find "$basedir" -name 'config.js' -type f -exec perl -p -i -e "s|$default_name|$name|g" {} \;

echo "--> Search & replace name ... ${green}done${txtreset}"

# PHP files
find "$basedir_all_files" -name '*.php' -type f -exec perl -p -i -e "s|$default_id|$id|g" {} \;

# style.scss
find "$sassdir" -name 'style.scss' -type f -exec perl -p -i -e "s|$default_id|$id|g" {} \;

# bower.json
#find "$basedir" -name 'bower.json' -type f -exec perl -p -i -e "s|$default_id|$id|g" {} \;

# package.json
find "$basedir" -name 'package.json' -type f -exec perl -p -i -e "s|$default_id|$id|g" {} \;

# config.js
find "$basedir" -name 'config.js' -type f -exec perl -p -i -e "s|$default_id|$id|g" {} \;

echo "--> Search & replace id ..... ${green}done${txtreset}"

# config.js
find "$basedir" -name 'config.js' -type f -exec perl -p -i -e "s|$default_url|$url|g" {} \;

echo "--> Change url .............. ${green}done${txtreset}"

echo "--> ${green}Setup complete!${txtreset}"

echo "--> setup.sh removed"
rm "$setup_script"
