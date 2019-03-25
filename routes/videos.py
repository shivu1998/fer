import sys
import collections
import json
from apiclient.discovery import build
import numpy
import cv2
api_key="AIzaSyCVHp-sceFLnk_-XuuvEhZX9VytMb2blVc"
youtube=build("youtube","v3",developerKey=api_key)
res=youtube.videos().list(part='snippet,contentDetails,statistics',chart='mostPopular',regionCode='IN',videoCategoryId='',maxResults=15).execute() 
print(json.dumps(res['items']))
sys.stdout.flush()