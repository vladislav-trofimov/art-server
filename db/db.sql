SQLite format 3   @     f                                                               f .r�� 
� 
�����                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 �8�KtableauthorauthorCREATE TABLE author(
   id integer PRIMARY KEY AUTOINCREMENT,
   name TEXT,
   date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   date_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   date_deleted TIMESTAMP DEFAULT CURRENT_TIMESTAMP
, password TEXT, googleId TEXT, avatar TEXT DEFAULT '')�9�YtableartartCREATE TABLE art(
   id integer PRIMARY KEY AUTOINCREMENT,
   author_id integer not null,
   category_id integer not null,
   description TEXT,
   file_path TEXT,
   date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   date_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   date_deleted TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   FOREIGN KEY(author_id) REFERENCES author(id),
   FOREIGN KEY(category_id) REFERENCES category(id)
)��ctablecategorycategoryCREATE TABLE category(
   id integer PRIMARY KEY AUTOINCREMENT,
   name TEXT,
   date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   date_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   date_deleted TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)P++Ytablesqlite_sequencesqlite_sequenceCREATE TABLE sqlite_sequence(name,seq)   ��_tableauthorauthorCREATE TABLE author(
   id integer PRIMARY KEY AUTOINCREMENT,
   name TEXT,
   date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   date_updated TIMESTAMP N'kindexidx_google_idauthorCREATE INDEX idx_google_id ON author (googleId)   � �l!W�222                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            �333 7New User2024-05-18 18:43:532024-05-18 18:43:532024-05-18 18:43:531040323568326963�G
 +333 7�MHanna Trofimova2024-05-19 18:21:172024-05-19 18:21:172024-05-19 18:21:17116654166505611480345https://lh3.googleusercontent.com/a/ACg8ocJ0BIfSg6qh9XpEI-TYG5bXf8cO_BlhXyp7h2ekPWvc_3b-mA=s96-c�G
 '333 7�QVlad Trofimov2024-05-19 17:29:332024-05-19 17:29:332024-05-19 17:29:33104032356832696310059https://lh3.googleusercontent.com/a/ACg8ocL0SuXS9OKPbo9kUc8qMHzZT6uSPju2QnvCA1Fz-tfOTMW__AnN=s96-cI 333Hanna2024-05-06 20:14:542024-05-06 20:14:542024-05-06 20:14:54mamaG 333Yeva2024-05-06 18:07:232024-05-06 18:07:232024-05-06 18:07:23123I 333Vlad2024-05-05 21:20:332024-05-05 21:20:332024-05-05 21:20:33admin� � ���                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   categoryart/   	categor
author   � �q+�                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    E 333custom2024-05-06 17:38:222024-05-06 17:38:222024-05-06 17:38:22D 333anime2024-05-06 17:38:192024-05-06 17:38:192024-05-06 17:38:19F 333classic2024-05-06 17:38:172024-05-06 17:38:172024-05-06 17:38:17E 333modern2024-05-05 21:20:392024-05-05 21:20:392024-05-05 21:20:39    �G���HHHHHHHHHHHHHHH�                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        � �333rtyrtyrty6/file-1715022407441-Screenshot from 2024-05-03 10-49-44.png2024-05-06 19:06:472024-05-06 19:06:472024-05-06 19:06:47b � �333rtyrtyrty6/file-1715021315205-Screenshot from 2024-05-03 10-49-44.png2024-05-06 18:48:352024-05-06 18:48:352024-05-06 18:48:35  + �333rtyrtyrty6/file-1715021280678-Screenshot from 2024-05-03 10-49-44.png2024-05-06 18:48:002024-05-06 18:48:002024-05-06 18:48:00  
� �333rtyrtyrty6/file-1715021042880-Screenshot from 2024-05-03 10-49-44.png2024-05-06 18:44:022024-05-06 18:44:022024-05-06 18:44:02�

 �333rtyrtyrty6/file-1715019746130-Screenshot from 2024-05-03 10-49-44.png2024-05-06 18:22:262024-05-06 18:22:262024-05-06 18:22:26   �333rtyrtyrty6/file-1715019573703-Screenshot from 2024-05-03 10-49-44.png2024-05-06 18:19:332024-05-06 18:19:332024-05-06 18:19:33�

 �333rtyrtyrty6/file-1715019436758-Screenshot from 2024-05-03 10-49-44.png2024-05-06 18:17:162024-05-06 18:17:162024-05-06 18:17:16�

 �333rtyrtyrty6/file-1715019258920-Screenshot from 2024-05-03 10-49-44.png2024-05-06 18:14:182024-05-06 18:14:182024-05-06 18:14:18�

 �333rtyrtyrty6/file-1715019224365-Screenshot from 2024-05-03 10-49-44.png2024-05-06 18:13:442024-05-06 18:13:442024-05-06 18:13:44T �333rtyrtyrty6/file-1715019040435-Screenshot from 2024-05-03 10-49-44.png2024-05-06 18:10:402024-05-06 18:10:402024-05-06 18:10:40r	 a333TTTT6/file-1715018880753-ukraine-flag-icon.png2024-05-06 18:08:002024-05-06 18:08:002024-05-06 18:08:00�
 	%�333fghfghfghfgh1/file-1715017132705-Screenshot from 2024-05-02 12-54-29.png2024-05-06 17:38:522024-05-06 17:38:522024-05-06 17:38:52�
 		�333etertert1/file-1715014806790-Screenshot from 2024-04-25 17-17-56.png2024-05-06 17:00:062024-05-06 17:00:062024-05-06 17:00:06  6 		�333etertert1/file-1715014297881-Screenshot from 2024-04-25 17-17-56.png2024-05-06 16:51:372024-05-06 16:51:372024-05-06 16:51:37  �		 �3331/file-1714995888129-Screenshot from 2024-04-29 11-08-44.png2024-05-06 11:44:482024-05-06 11:44:482024-05-06 11:44:48{	 		 3331/file-1714995449263-gettyimages-1448734171-2048x2048.jpg2024-05-06 11:37:292024-05-06 11:37:292024-05-06 11:37:29�
 		 �3331/file-1714994750340-stock-photo-frogs-flowers-frog-flying-frog.jpeg2024-05-06 11:25:502024-05-06 11:25:502024-05-06 11:25:50

 		 �3331/file-1714994546880-Screenshot from 2024-04-29 10-1w/	 a333asdasdasd23/Screenshot_from_2024-05-13_12-48-43.png2024-05-19 18:35:592024-05-19 18:35:592024-05-19 18:35:59y.	 	%a333qweqweqweqwe19/Screenshot_from_2024-05-18_18-59-55.png2024-05-19 18:33:412024-05-19 18:33:412024-05-19 18:33:41~-	 o333adsasdasd7/stock-photo-frogs-flowers-frog-flying-frog.jpeg2024-05-06 20:15:402024-05-06 20:15:402024-05-06 20:15:40],	 -333adsasdasd7/favicon_io.zip2024-05-06 20:15:252024-05-06 20:15:252024-05-06 20:15:25V+	 %333Ballon6/ballon.png2024-05-06 20:09:572024-05-06 20:09:572024-05-06 20:09:57]*	 ;333UA6/ukraine-flag-icon.png2024-05-06 20:09:412024-05-06 20:09:412024-05-06 20:09:41X)	 		)333postback1/postback.jpg2024-05-06 20:09:062024-05-06 20:09:062024-05-06 20:09:06
   � �����aa�                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            �104032356832696310059   w1040323568326963100597104032356832696310059   C1040323568371166541665056114803457104032356832696310059   	