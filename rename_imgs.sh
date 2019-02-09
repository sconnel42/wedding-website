#!/bin/bash

# A simple script to rename images according to the date that they were taken.
# The script accepts a directory of images, and it will rename all of the images
# according to the date in the EXIF data.

# For example CoolImage7890.jpg -> IMG_20180612182352.jpg

RED='\033[0;31m'
NC='\033[0m'

if [ -z $1 ]; then
    echo 'Usage:';
    echo -e "\t./rename_script.sh ${RED}dir${NC}\n"
    echo -e "\tWhere ${RED}dir${NC} is a directory of images"
    exit
fi

img_dir=$1

# Take each image in the folder and change its name
for f in $(ls ${img_dir}); do
    suffix=${f##*.}
    img_path=${img_dir}/$f

    # Try getting date from EXIF data
    picture_date=$(exif -t="Date and Time" --ifd=0 -m ${img_path} | sed -E 's/(:| )//g')
    # TODO: Hide errors?

    # If the date isn't in the EXIF data, or if the image doesn't have EXIF data,
    # just get the date from stat instead
    if [ -z ${picture_date} ]; then
        echo 'Getting date from stat instead'
        picture_date=$(stat -c %y "${img_path}" | sed -e 's/\................//g' -e 's/-//g' -e 's/://g' -e 's/ //g')
    fi

    # Rename images
    echo $f': '${img_dir}/IMG_${picture_date}.${suffix}
    mv ${img_dir}/$f ${img_dir}/IMG_${picture_date}.${suffix}
done
