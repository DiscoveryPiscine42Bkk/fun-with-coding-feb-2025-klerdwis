#!/bin/bash
# นับไฟล์ปกติ
file_count=$(find . -type f | wc -l)
# นับไดเรกทอรี
dir_count=$(find . -type d | wc -l)
# ผลลัพธ์
echo $((file_count + dir_count))
