var searchIndex = JSON.parse('{\
"glob":{"doc":"Support for matching file paths against Unix shell style …","t":"DGDDDDLLLLLLLLLLLMLLLLLLLLLLLLLLLLLLLLLLLLLLLLLFFLLLLLLLLLLLLLMLLLLLLMLLMMLLLLLLLLLLLLLLLLLLLL","n":["GlobError","GlobResult","MatchOptions","Paths","Pattern","PatternError","as_str","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","case_sensitive","cause","clone","clone","clone_into","clone_into","cmp","cmp","default","default","description","description","eq","eq","error","escape","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from_str","glob","glob_with","hash","hash","into","into","into","into","into","into_error","into_iter","matches","matches_path","matches_path_with","matches_with","msg","new","new","next","partial_cmp","partial_cmp","path","pos","provide","provide","require_literal_leading_dot","require_literal_separator","to_owned","to_owned","to_string","to_string","to_string","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id"],"q":["glob","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["A glob iteration error.","An alias for a glob iteration result.","Configuration options to modify the behaviour of …","An iterator that yields <code>Path</code>s from the filesystem that …","A compiled Unix shell style pattern.","A pattern parsing error.","Access the original glob pattern.","","","","","","","","","","","Whether or not patterns should be matched in a …","","","","","","","","","","","","","","The error in question.","Escape metacharacters within the given string by …","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","Return an iterator that produces all the <code>Path</code>s that match …","Return an iterator that produces all the <code>Path</code>s that match …","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Consumes self, returning the <em>raw</em> underlying <code>io::Error</code>","","Return if the given <code>str</code> matches this <code>Pattern</code> using the …","Return if the given <code>Path</code>, when converted to a <code>str</code>, matches …","Return if the given <code>Path</code>, when converted to a <code>str</code>, matches …","Return if the given <code>str</code> matches this <code>Pattern</code> using the …","A message describing the error.","This function compiles Unix shell style patterns.","Constructs a new <code>MatchOptions</code> with default field values. …","","","","The Path that the error corresponds to.","The approximate character index of where the error …","","","Whether or not paths that contain components that start …","Whether or not path-component separator characters (e.g. <code>/</code> …","","","","","","","","","","","","","","","","","","","",""],"i":[0,0,0,0,0,0,1,12,3,8,1,6,12,3,8,1,6,6,3,1,6,1,6,1,6,1,6,3,8,1,6,3,1,12,3,3,8,8,1,1,6,12,3,8,1,6,1,0,0,1,6,12,3,8,1,6,3,12,1,1,1,1,8,1,6,12,1,6,3,8,3,8,6,6,1,6,3,8,1,12,3,8,1,6,12,3,8,1,6,12,3,8,1,6],"f":[0,0,0,0,0,0,[1,2],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],0,[3,[[5,[4]]]],[1,1],[6,6],[[]],[[]],[[1,1],7],[[6,6],7],[[],1],[[],6],[3,2],[8,2],[[1,1],9],[[6,6],9],[3,10],[2,11],[[12,13],14],[[3,13],14],[[3,13],14],[[8,13],14],[[8,13],14],[[1,13],14],[[1,13],14],[[6,13],14],[[]],[[]],[[]],[[]],[[]],[2,[[15,[1,8]]]],[2,[[15,[12,8]]]],[[2,6],[[15,[12,8]]]],[1],[6],[[]],[[]],[[]],[[]],[[]],[3,10],[[]],[[1,2],9],[[1,16],9],[[1,16,6],9],[[1,2,6],9],0,[2,[[15,[1,8]]]],[[],6],[12,[[5,[17]]]],[[1,1],[[5,[7]]]],[[6,6],[[5,[7]]]],[3,16],0,[18],[18],0,0,[[]],[[]],[[],11],[[],11],[[],11],[[],15],[[],15],[[],15],[[],15],[[],15],[[],15],[[],15],[[],15],[[],15],[[],15],[[],19],[[],19],[[],19],[[],19],[[],19]],"p":[[3,"Pattern"],[15,"str"],[3,"GlobError"],[8,"Error"],[4,"Option"],[3,"MatchOptions"],[4,"Ordering"],[3,"PatternError"],[15,"bool"],[3,"Error"],[3,"String"],[3,"Paths"],[3,"Formatter"],[6,"Result"],[4,"Result"],[3,"Path"],[6,"GlobResult"],[3,"Demand"],[3,"TypeId"]]},\
"include_directory":{"doc":"An extension to the <code>include_str!()</code> and <code>include_bytes!()</code> …","t":"DNEDNDLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLOLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL","n":["Dir","Dir","DirEntry","File","File","Metadata","accessed","as_dir","as_file","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","children","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","contains","contents","contents_utf8","created","dirs","entries","eq","eq","eq","eq","extract","files","find","fmt","fmt","fmt","fmt","from","from","from","from","get_dir","get_entry","get_file","include_directory","into","into","into","into","metadata","mimetype","mimetype_as_string","modified","new","new","new","path","path","path","to_owned","to_owned","to_owned","to_owned","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","with_metadata"],"q":["include_directory","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["A directory.","A directory.","A directory entry, roughly analogous to <code>std::fs::DirEntry</code>.","A file with its contents stored in a <code>&amp;&#39;static [u8]</code>.","A file.","Basic metadata for a file.","Get the time this file was last accessed.","Try to get this as a <code>Dir</code>, if it is one.","Try to get this as a <code>File</code>, if it is one.","","","","","","","","","Get this item’s sub-items, if it has any.","","","","","","","","","Does this directory contain <code>path</code>?","The file’s raw contents.","The file’s contents interpreted as a string.","Get the time this file was created.","Get a list of the sub-directories inside this directory.","The entries within this <code>Dir</code>.","","","","","Create directories and extract all files to real …","Get a list of the files in this directory.","Search for a file or directory with a glob pattern.","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Look up a dir by name.","Recursively search for a <code>DirEntry</code> with a particular path.","Look up a file by name.","Embed the contents of a directory in your crate.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Get the <code>File</code>’s [<code>Metadata</code>], if available.","The file’s mimetype.","The file’s mimetype as a string.","Get the time this file was last modified.","Create a new <code>Dir</code>.","Create a new <code>File</code>.","Create a new <code>Metadata</code> using the number of seconds since the","The full path for this <code>Dir</code>, relative to the directory …","The <code>DirEntry</code>’s full path.","The full path for this <code>File</code>, relative to the directory …","","","","","","","","","","","","","","","","","Set the [<code>Metadata</code>] associated with a <code>File</code>."],"i":[0,3,0,0,3,0,1,3,3,4,3,6,1,4,3,6,1,3,4,3,6,1,4,3,6,1,4,6,6,1,4,4,4,3,6,1,4,4,4,4,3,6,1,4,3,6,1,4,4,4,0,4,3,6,1,6,6,6,1,4,6,1,4,3,6,4,3,6,1,4,3,6,1,4,3,6,1,4,3,6,1,6],"f":[0,0,0,0,0,0,[1,2],[3,[[5,[4]]]],[3,[[5,[6]]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[3],[4,4],[3,3],[6,6],[1,1],[[]],[[]],[[]],[[]],[[4,[8,[7]]],9],[6],[6,[[5,[10]]]],[1,2],[4,11],[4],[[4,4],9],[[3,3],9],[[6,6],9],[[1,1],9],[[4,[8,[7]]],12],[4,11],[[4,10],[[14,[11,13]]]],[[4,15],16],[[3,15],16],[[6,15],16],[[1,15],16],[[]],[[]],[[]],[[]],[[4,[8,[7]]],[[5,[4]]]],[[4,[8,[7]]],[[5,[3]]]],[[4,[8,[7]]],[[5,[6]]]],0,[[]],[[]],[[]],[[]],[6,[[5,[1]]]],[6,17],[6,18],[1,2],[10,4],[[10,10],6],[[19,19,19],1],[4,7],[3,7],[6,7],[[]],[[]],[[]],[[]],[[],14],[[],14],[[],14],[[],14],[[],14],[[],14],[[],14],[[],14],[[],20],[[],20],[[],20],[[],20],[[6,1],6]],"p":[[3,"Metadata"],[3,"SystemTime"],[4,"DirEntry"],[3,"Dir"],[4,"Option"],[3,"File"],[3,"Path"],[8,"AsRef"],[15,"bool"],[15,"str"],[8,"Iterator"],[6,"Result"],[3,"PatternError"],[4,"Result"],[3,"Formatter"],[6,"Result"],[3,"Mime"],[3,"String"],[3,"Duration"],[3,"TypeId"]]},\
"include_directory_macros":{"doc":"Implementation details of the <code>include_directory</code>.","t":"O","n":["include_directory"],"q":["include_directory_macros"],"d":["Embed the contents of a directory in your crate."],"i":[0],"f":[0],"p":[]},\
"mime":{"doc":"Mime","t":"RRRRRRRRRRRRRRRRRRRRDRRRRRRRRRRRRRRRRRRRDDRRRRRDRRRRRRRRRRRRRRRRRRRRRRRRRRLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL","n":["APPLICATION","APPLICATION_JAVASCRIPT","APPLICATION_JAVASCRIPT_UTF_8","APPLICATION_JSON","APPLICATION_MSGPACK","APPLICATION_OCTET_STREAM","APPLICATION_PDF","APPLICATION_WWW_FORM_URLENCODED","AUDIO","BASIC","BMP","BOUNDARY","CHARSET","CSS","CSV","EVENT_STREAM","FONT","FONT_WOFF","FONT_WOFF2","FORM_DATA","FromStrError","GIF","HTML","IMAGE","IMAGE_BMP","IMAGE_GIF","IMAGE_JPEG","IMAGE_PNG","IMAGE_STAR","IMAGE_SVG","JAVASCRIPT","JPEG","JSON","MESSAGE","MODEL","MP4","MPEG","MSGPACK","MULTIPART","MULTIPART_FORM_DATA","Mime","Name","OCTET_STREAM","OGG","PDF","PLAIN","PNG","Params","STAR","STAR_STAR","SVG","TEXT","TEXT_CSS","TEXT_CSS_UTF_8","TEXT_CSV","TEXT_CSV_UTF_8","TEXT_EVENT_STREAM","TEXT_HTML","TEXT_HTML_UTF_8","TEXT_JAVASCRIPT","TEXT_PLAIN","TEXT_PLAIN_UTF_8","TEXT_STAR","TEXT_TAB_SEPARATED_VALUES","TEXT_TAB_SEPARATED_VALUES_UTF_8","TEXT_VCARD","TEXT_XML","UTF_8","VCARD","VIDEO","WOFF","WOFF2","WWW_FORM_URLENCODED","XML","as_ref","as_ref","as_str","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone_into","clone_into","cmp","cmp","description","eq","eq","eq","eq","essence_str","fmt","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from_str","get_param","hash","hash","into","into","into","into","into_iter","next","params","partial_cmp","partial_cmp","provide","size_hint","subtype","suffix","to_owned","to_owned","to_string","to_string","to_string","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","type_","type_id","type_id","type_id","type_id"],"q":["mime","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["application","<code>application/javascript</code>","<code>application/javascript; charset=utf-8</code>","<code>application/json</code>","<code>application/msgpack</code>","<code>application/octet-stream</code>","<code>application/pdf</code>","<code>application/x-www-form-urlencoded</code>","audio","basic","bmp","boundary","charset","css","csv","event-stream","font","<code>font/woff</code>","<code>font/woff2</code>","form-data","An error when parsing a <code>Mime</code> from a string.","gif","html","image","<code>image/bmp</code>","<code>image/gif</code>","<code>image/jpeg</code>","<code>image/png</code>","<code>image/*</code>","<code>image/svg+xml</code>","javascript","jpeg","json","message","model","mp4","mpeg","msgpack","multipart","<code>multipart/form-data</code>","A parsed mime or media type.","A section of a <code>Mime</code>.","octet-stream","ogg","pdf","plain","png","An iterator over the parameters of a MIME.","","<code>*/*</code>","svg","text","<code>text/css</code>","<code>text/css; charset=utf-8</code>","<code>text/csv</code>","<code>text/csv; charset=utf-8</code>","<code>text/event-stream</code>","<code>text/html</code>","<code>text/html; charset=utf-8</code>","<code>text/javascript</code>","<code>text/plain</code>","<code>text/plain; charset=utf-8</code>","<code>text/*</code>","<code>text/tab-separated-values</code>","<code>text/tab-separated-values; charset=utf-8</code>","<code>text/vcard</code>","<code>text/xml</code>","utf-8","vcard","video","woff","woff2","x-www-form-urlencoded","xml","","","Get the value of this <code>Name</code> as a string.","","","","","","","","","","","","","","","","","","","","Return a <code>&amp;str</code> of the Mime’s “essence”.","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","Look up a parameter by name.","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","Returns an iterator over the parameters.","","","","","Get the subtype of this <code>Mime</code>.","Get an optional +suffix for this <code>Mime</code>.","","","","","","","","","","","","","","Get the top level media type for this <code>Mime</code>.","","","",""],"i":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,3,7,1,3,5,7,1,3,5,1,3,1,3,1,3,5,1,1,3,3,1,7,1,1,3,3,5,5,7,1,3,5,1,1,1,3,7,1,3,5,7,7,1,1,3,5,7,1,1,1,3,1,3,5,7,1,3,5,7,1,3,5,1,7,1,3,5],"f":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[1,2],[3,2],[3,2],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[1,1],[3,3],[[]],[[]],[[1,1],4],[[3,3],4],[5,2],[[1,2],6],[[1,1],6],[[3,3],6],[[3,2],6],[1,2],[[7,8],9],[[1,8],9],[[1,8],9],[[3,8],9],[[3,8],9],[[5,8],9],[[5,8],9],[[]],[[]],[[]],[[]],[2,[[10,[1]]]],[1,[[11,[3]]]],[1],[3],[[]],[[]],[[]],[[]],[[]],[7,11],[1,7],[[1,1],[[11,[4]]]],[[3,3],[[11,[4]]]],[12],[7],[1,3],[1,[[11,[3]]]],[[]],[[]],[[],13],[[],13],[[],13],[[],10],[[],10],[[],10],[[],10],[[],10],[[],10],[[],10],[[],10],[1,3],[[],14],[[],14],[[],14],[[],14]],"p":[[3,"Mime"],[15,"str"],[3,"Name"],[4,"Ordering"],[3,"FromStrError"],[15,"bool"],[3,"Params"],[3,"Formatter"],[6,"Result"],[4,"Result"],[4,"Option"],[3,"Demand"],[3,"String"],[3,"TypeId"]]},\
"new_mime_guess":{"doc":"Guessing of MIME types by file extension.","t":"DDDDLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLFLFLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL","n":["Iter","IterRaw","Mime","MimeGuess","as_ref","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","cmp","count","eq","eq","eq","essence_str","first","first_or","first_or_else","first_or_octet_stream","first_or_text_plain","first_raw","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from_ext","from_ext","from_path","from_path","from_str","get_param","hash","into","into","into","into","into_iter","into_iter","into_iter","into_iter","is_empty","iter","iter_raw","len","len","next","next","next_back","next_back","params","partial_cmp","size_hint","size_hint","subtype","suffix","to_owned","to_owned","to_owned","to_owned","to_string","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","type_","type_id","type_id","type_id","type_id"],"q":["new_mime_guess","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["An iterator over the <code>Mime</code> types of a <code>MimeGuess</code>.","An iterator over the raw media type strings of a <code>MimeGuess</code>.","A parsed mime or media type.","A “guess” of the MIME/Media Type(s) of an extension or …","","","","","","","","","","","","","","","","","","","Get the number of MIME types in the current guess.","","","","Return a <code>&amp;str</code> of the Mime’s “essence”.","Get the first guessed <code>Mime</code>, if applicable.","Get the first guessed <code>Mime</code>, or if the guess is empty, …","Get the first guessed <code>Mime</code>, or if the guess is empty, …","Get the first guessed <code>Mime</code>, or if the guess is empty, …","Get the first guessed <code>Mime</code>, or if the guess is empty, …","Get the first guessed Media Type as a string, if …","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Wrapper of <code>MimeGuess::from_ext()</code>.","Guess the MIME type of a file (real or otherwise) with the …","Wrapper of <code>MimeGuess::from_path()</code>.","Guess the MIME type of <code>path</code> by its extension (as defined by","","Look up a parameter by name.","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","<code>true</code> if the guess did not return any known mappings for …","Get an iterator over the <code>Mime</code> values contained in this …","Get an iterator over the raw media-type strings in this …","","","","","","","Returns an iterator over the parameters.","","","","Get the subtype of this <code>Mime</code>.","Get an optional +suffix for this <code>Mime</code>.","","","","","","","","","","","","","","Get the top level media type for this <code>Mime</code>.","","","",""],"i":[0,0,0,0,1,3,4,5,1,3,4,5,1,3,4,5,1,3,4,5,1,1,3,3,1,1,1,3,3,3,3,3,3,3,4,5,1,1,3,4,5,1,0,3,0,3,1,1,1,3,4,5,1,3,3,4,5,3,3,3,4,5,4,5,4,5,1,1,4,5,1,1,3,4,5,1,1,3,4,5,1,3,4,5,1,1,3,4,5,1],"f":[0,0,0,0,[1,2],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[3,3],[4,4],[5,5],[1,1],[[]],[[]],[[]],[[]],[[1,1],6],[3,7],[[3,3],8],[[1,1],8],[[1,2],8],[1,2],[3,[[9,[1]]]],[[3,1],1],[3,1],[3,1],[3,1],[3,[[9,[2]]]],[[3,10],11],[[4,10],11],[[5,10],11],[[1,10],[[13,[12]]]],[[1,10],[[13,[12]]]],[[]],[[]],[[]],[[]],[2,3],[2,3],[[[15,[14]]],3],[[[15,[14]]],3],[2,[[13,[1]]]],[1,[[9,[16]]]],[1],[[]],[[]],[[]],[[]],[3],[3],[[]],[[]],[3,8],[3,4],[3,5],[4,7],[5,7],[4,9],[5,9],[4,9],[5,9],[1,17],[[1,1],[[9,[6]]]],[4],[5],[1,16],[1,[[9,[16]]]],[[]],[[]],[[]],[[]],[[],18],[[],13],[[],13],[[],13],[[],13],[[],13],[[],13],[[],13],[[],13],[1,16],[[],19],[[],19],[[],19],[[],19]],"p":[[3,"Mime"],[15,"str"],[3,"MimeGuess"],[3,"Iter"],[3,"IterRaw"],[4,"Ordering"],[15,"usize"],[15,"bool"],[4,"Option"],[3,"Formatter"],[6,"Result"],[3,"Error"],[4,"Result"],[3,"Path"],[8,"AsRef"],[3,"Name"],[3,"Params"],[3,"String"],[3,"TypeId"]]},\
"proc_macro2":{"doc":"github crates-io docs-rs","t":"NNNEDNDNNDDNNNDNEDDELLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLALLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLDCLLLLLLLLLLLLLL","n":["Alone","Brace","Bracket","Delimiter","Group","Group","Ident","Ident","Joint","LexError","Literal","Literal","None","Parenthesis","Punct","Punct","Spacing","Span","TokenStream","TokenTree","as_char","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","byte_string","call_site","character","clone","clone","clone","clone","clone","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","cmp","default","delimiter","eq","eq","eq","eq","extend","extend","f32_suffixed","f32_unsuffixed","f64_suffixed","f64_unsuffixed","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from_iter","from_iter","from_str","from_str","hash","i128_suffixed","i128_unsuffixed","i16_suffixed","i16_unsuffixed","i32_suffixed","i32_unsuffixed","i64_suffixed","i64_unsuffixed","i8_suffixed","i8_unsuffixed","into","into","into","into","into","into","into","into","into","into","into_iter","is_empty","isize_suffixed","isize_unsuffixed","join","located_at","mixed_site","new","new","new","new","new_raw","partial_cmp","provide","resolved_at","set_span","set_span","set_span","set_span","set_span","spacing","span","span","span","span","span","span","span_close","span_open","stream","string","subspan","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_string","to_string","to_string","to_string","to_string","to_string","to_string","token_stream","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","u128_suffixed","u128_unsuffixed","u16_suffixed","u16_unsuffixed","u32_suffixed","u32_unsuffixed","u64_suffixed","u64_unsuffixed","u8_suffixed","u8_unsuffixed","unwrap","usize_suffixed","usize_unsuffixed","IntoIter","TokenStream","borrow","borrow_mut","clone","clone_into","fmt","from","into","into_iter","next","size_hint","to_owned","try_from","try_into","type_id"],"q":["proc_macro2","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","proc_macro2::token_stream","","","","","","","","","","","","","","",""],"d":["E.g. <code>+</code> is <code>Alone</code> in <code>+ =</code>, <code>+ident</code> or <code>+()</code>.","<code>{ ... }</code>","<code>[ ... ]</code>","Describes how a sequence of token trees is delimited.","A delimited token stream.","A token stream surrounded by bracket delimiters.","A word of Rust code, which may be a keyword or legal …","An identifier.","E.g. <code>+</code> is <code>Joint</code> in <code>+=</code> or <code>&#39;</code> is <code>Joint</code> in <code>&#39;#</code>.","Error returned from <code>TokenStream::from_str</code>.","A literal string (<code>&quot;hello&quot;</code>), byte string (<code>b&quot;hello&quot;</code>), …","A literal character (<code>&#39;a&#39;</code>), string (<code>&quot;hello&quot;</code>), number (<code>2.3</code>), …","<code>Ø ... Ø</code>","<code>( ... )</code>","A <code>Punct</code> is a single punctuation character like <code>+</code>, <code>-</code> or <code>#</code>.","A single punctuation character (<code>+</code>, <code>,</code>, <code>$</code>, etc.).","Whether a <code>Punct</code> is followed immediately by another <code>Punct</code> …","A region of source code, along with macro expansion …","An abstract stream of tokens, or more concretely a …","A single token or a delimited sequence of token trees …","Returns the value of this punctuation character as <code>char</code>.","","","","","","","","","","","","","","","","","","","","","Byte string literal.","The span of the invocation of the current procedural macro.","Character literal.","","","","","","","","","","","","","","","","","","","","","Returns the delimiter of this <code>Group</code>","","","","","","","Creates a new suffixed floating-point literal.","Creates a new unsuffixed floating-point literal.","Creates a new suffixed floating-point literal.","Creates a new unsuffixed floating-point literal.","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","","","Returns the argument unchanged.","Returns the argument unchanged.","","","","","Returns the argument unchanged.","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","","","","","Creates a new suffixed integer literal with the specified …","Creates a new unsuffixed integer literal with the …","Creates a new suffixed integer literal with the specified …","Creates a new unsuffixed integer literal with the …","Creates a new suffixed integer literal with the specified …","Creates a new unsuffixed integer literal with the …","Creates a new suffixed integer literal with the specified …","Creates a new unsuffixed integer literal with the …","Creates a new suffixed integer literal with the specified …","Creates a new unsuffixed integer literal with the …","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","Checks if this <code>TokenStream</code> is empty.","Creates a new suffixed integer literal with the specified …","Creates a new unsuffixed integer literal with the …","Create a new span encompassing <code>self</code> and <code>other</code>.","Creates a new span with the same name resolution behavior …","The span located at the invocation of the procedural …","Returns an empty <code>TokenStream</code> containing no token trees.","Creates a new <code>Group</code> with the given delimiter and token …","Creates a new <code>Punct</code> from the given character and spacing.","Creates a new <code>Ident</code> with the given <code>string</code> as well as the …","Same as <code>Ident::new</code>, but creates a raw identifier (<code>r#ident</code>…","","","Creates a new span with the same line/column information …","Configures the span for <em>only this token</em>.","Configures the span for this <code>Group</code>’s delimiters, but not …","Configure the span for this punctuation character.","Configures the span of this <code>Ident</code>, possibly changing its …","Configures the span associated for this literal.","Returns the spacing of this punctuation character, …","","Returns the span of this tree, delegating to the <code>span</code> …","Returns the span for the delimiters of this token stream, …","Returns the span for this punctuation character.","Returns the span of this <code>Ident</code>.","Returns the span encompassing this literal.","Returns the span pointing to the closing delimiter of this …","Returns the span pointing to the opening delimiter of this …","Returns the <code>TokenStream</code> of tokens that are delimited in …","String literal.","Returns a <code>Span</code> that is a subset of <code>self.span()</code> containing …","","","","","","","","","","","","","","","","","Public implementation details for the <code>TokenStream</code> type, …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Creates a new suffixed integer literal with the specified …","Creates a new unsuffixed integer literal with the …","Creates a new suffixed integer literal with the specified …","Creates a new unsuffixed integer literal with the …","Creates a new suffixed integer literal with the specified …","Creates a new unsuffixed integer literal with the …","Creates a new suffixed integer literal with the specified …","Creates a new unsuffixed integer literal with the …","Creates a new suffixed integer literal with the specified …","Creates a new unsuffixed integer literal with the …","Convert <code>proc_macro2::Span</code> to <code>proc_macro::Span</code>.","Creates a new suffixed integer literal with the specified …","Creates a new unsuffixed integer literal with the …","An iterator over <code>TokenStream</code>’s <code>TokenTree</code>s.","","","","","","","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","","","","","","",""],"i":[9,8,8,0,0,6,0,6,9,0,0,6,8,8,0,6,0,0,0,0,1,16,5,4,6,7,8,1,9,10,3,16,5,4,6,7,8,1,9,10,3,3,4,3,5,4,6,7,8,1,9,10,3,5,4,6,7,8,1,9,10,3,10,5,7,8,9,10,10,5,5,3,3,3,3,16,16,5,5,4,6,6,7,7,8,1,1,9,10,10,3,3,16,5,5,5,4,4,6,6,6,6,6,7,8,1,9,10,3,5,5,5,3,10,3,3,3,3,3,3,3,3,3,3,16,5,4,6,7,8,1,9,10,3,5,5,3,3,4,4,4,5,7,1,10,10,10,16,4,6,7,1,10,3,1,16,6,7,1,10,3,7,7,7,3,3,5,4,6,7,8,1,9,10,3,16,5,6,7,1,10,3,0,16,5,4,6,7,8,1,9,10,3,16,5,4,6,7,8,1,9,10,3,16,5,4,6,7,8,1,9,10,3,3,3,3,3,3,3,3,3,3,3,4,3,3,0,0,28,28,28,28,28,28,28,28,28,28,28,28,28,28],"f":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[1,2],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],3],[[],4],[2,3],[5,5],[4,4],[6,6],[7,7],[8,8],[1,1],[9,9],[10,10],[3,3],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[10,10],11],[[],5],[7,8],[[8,8],12],[[9,9],12],[[10,10],12],[10,12],[[5,13]],[[5,13]],[14,3],[14,3],[15,3],[15,3],[[16,17],18],[[16,17],18],[[5,17],18],[[5,17],18],[[4,17],18],[[6,17],18],[[6,17],18],[[7,17],18],[[7,17],18],[[8,17],18],[[1,17],18],[[1,17],18],[[9,17],18],[[10,17],18],[[10,17],18],[[3,17],18],[[3,17],18],[[]],[19,5],[6,5],[[]],[[]],[20,4],[10,6],[3,6],[7,6],[[]],[1,6],[[]],[[]],[[]],[[]],[[]],[[]],[13,5],[13,5],[21,[[22,[5,16]]]],[21,[[22,[3,16]]]],[10],[23,3],[23,3],[24,3],[24,3],[25,3],[25,3],[26,3],[26,3],[27,3],[27,3],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[5,28],[5,12],[29,3],[29,3],[[4,4],[[30,[4]]]],[[4,4],4],[[],4],[[],5],[[8,5],7],[[2,9],1],[[21,4],10],[[21,4],10],[[10,10],[[30,[11]]]],[31],[[4,4],4],[[6,4]],[[7,4]],[[1,4]],[[10,4]],[[3,4]],[1,9],[16,4],[6,4],[7,4],[1,4],[10,4],[3,4],[7,4],[7,4],[7,5],[21,3],[[3,[33,[32]]],[[30,[4]]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],34],[[],34],[[],34],[[],34],[[],34],[[],34],[[],34],0,[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],22],[[],35],[[],35],[[],35],[[],35],[[],35],[[],35],[[],35],[[],35],[[],35],[[],35],[36,3],[36,3],[37,3],[37,3],[38,3],[38,3],[39,3],[39,3],[40,3],[40,3],[4,20],[32,3],[32,3],0,0,[[]],[[]],[28,28],[[]],[[28,17],18],[[]],[[]],[[]],[28,[[30,[6]]]],[28],[[]],[[],22],[[],22],[[],35]],"p":[[3,"Punct"],[15,"char"],[3,"Literal"],[3,"Span"],[3,"TokenStream"],[4,"TokenTree"],[3,"Group"],[4,"Delimiter"],[4,"Spacing"],[3,"Ident"],[4,"Ordering"],[15,"bool"],[8,"IntoIterator"],[15,"f32"],[15,"f64"],[3,"LexError"],[3,"Formatter"],[6,"Result"],[3,"TokenStream"],[3,"Span"],[15,"str"],[4,"Result"],[15,"i128"],[15,"i16"],[15,"i32"],[15,"i64"],[15,"i8"],[3,"IntoIter"],[15,"isize"],[4,"Option"],[3,"Demand"],[15,"usize"],[8,"RangeBounds"],[3,"String"],[3,"TypeId"],[15,"u128"],[15,"u16"],[15,"u32"],[15,"u64"],[15,"u8"]]},\
"quote":{"doc":"github crates-io docs-rs","t":"IIIKKKKKOLLOOLLLLK","n":["IdentFragment","ToTokens","TokenStreamExt","append","append_all","append_separated","append_terminated","fmt","format_ident","into_token_stream","into_token_stream","quote","quote_spanned","span","span","to_token_stream","to_token_stream","to_tokens"],"q":["quote","","","","","","","","","","","","","","","","",""],"d":["Specialized formatting trait used by <code>format_ident!</code>.","Types that can be interpolated inside a <code>quote!</code> invocation.","TokenStream extension trait with methods for appending …","For use by <code>ToTokens</code> implementations.","For use by <code>ToTokens</code> implementations.","For use by <code>ToTokens</code> implementations.","For use by <code>ToTokens</code> implementations.","Format this value as an identifier fragment.","Formatting macro for constructing <code>Ident</code>s.","Convert <code>self</code> directly into a <code>TokenStream</code> object.","Convert <code>self</code> directly into a <code>TokenStream</code> object.","The whole point.","Same as <code>quote!</code>, but applies a given span to all tokens …","Span associated with this <code>IdentFragment</code>.","Span associated with this <code>IdentFragment</code>.","Convert <code>self</code> directly into a <code>TokenStream</code> object.","Convert <code>self</code> directly into a <code>TokenStream</code> object.","Write <code>self</code> to the given <code>TokenStream</code>."],"i":[0,0,0,6,6,6,6,7,0,8,8,0,0,7,7,8,8,8],"f":[0,0,0,[[]],[[]],[[]],[[]],[1,2],0,[[],3],[[],3],0,0,[[],[[5,[4]]]],[[],[[5,[4]]]],[[],3],[[],3],[3]],"p":[[3,"Formatter"],[6,"Result"],[3,"TokenStream"],[3,"Span"],[4,"Option"],[8,"TokenStreamExt"],[8,"IdentFragment"],[8,"ToTokens"]]},\
"unicase":{"doc":"UniCase","t":"DDLLLLLLLLLLLLLLLLLLLFLLFLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL","n":["Ascii","UniCase","as_ref","as_ref","ascii","borrow","borrow","borrow_mut","borrow_mut","clone","clone","clone_into","clone_into","cmp","cmp","default","default","deref","deref","deref_mut","deref_mut","eq","eq","eq","eq_ascii","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from","from","from_str","from_str","hash","hash","into","into","into","into","into","into_inner","into_inner","into_unicase","is_ascii","new","new","partial_cmp","partial_cmp","to_owned","to_owned","to_string","to_string","try_from","try_from","try_into","try_into","type_id","type_id","unicode"],"q":["unicase","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["Case Insensitive wrapper of Ascii strings.","Case Insensitive wrapper of strings.","","","Creates a new <code>UniCase</code> which performs only ASCII case …","","","","","","","","","","","","","","","","","Compare two string-like types for case-less equality, …","","","Compare two string-like types for case-less equality, …","","","","","Returns the argument unchanged.","","","","","","","","Returns the argument unchanged.","","","","","","Calls <code>U::from(self)</code>.","","","Calls <code>U::from(self)</code>.","Unwraps the inner value held by this <code>UniCase</code>.","","","Return <code>true</code> if this instance will only perform ASCII case …","Creates a new <code>UniCase</code>.","","","","","","","","","","","","","","Creates a new <code>UniCase</code>, skipping the ASCII check."],"i":[0,0,3,4,3,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,0,3,4,0,3,3,4,4,3,3,3,3,3,3,3,3,4,3,4,3,4,3,3,3,3,4,3,4,4,3,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3],"f":[0,0,[[[3,[[2,[1]]]]],1],[[[4,[[2,[1]]]]],1],[[],3],[[]],[[]],[[]],[[]],[[[3,[5]]],[[3,[5]]]],[[[4,[5]]],[[4,[5]]]],[[]],[[]],[[[3,[[2,[1]]]],[3,[[2,[1]]]]],6],[[[4,[[2,[1]]]],[4,[[2,[1]]]]],6],[[],[[3,[[0,[[2,[1]],7]]]]]],[[],[[4,[7]]]],[3],[4],[3],[4],[[],8],[[[3,[[2,[1]]]],3],8],[[[4,[[2,[1]]]]],8],[[],8],[[[3,[9]],10],11],[[[3,[12]],10],11],[[[4,[9]],10],11],[[[4,[12]],10],11],[[]],[13,[[3,[1]]]],[1,[[3,[[14,[1]]]]]],[1,[[3,[13]]]],[[[14,[1]]],[[3,[13]]]],[4,3],[[[2,[1]]],[[3,[[2,[1]]]]]],[13,[[3,[[14,[1]]]]]],[[]],[1,[[16,[[3,[[0,[15,[2,[1]]]]]]]]]],[1,[[16,[[4,[15]]]]]],[[[3,[[2,[1]]]]]],[[[4,[[2,[1]]]]]],[[[3,[1]]],1],[[]],[[[3,[13]]],13],[[[3,[[14,[1]]]]],[[14,[1]]]],[[]],[3],[4],[4,3],[3,8],[[[2,[1]]],[[3,[[2,[1]]]]]],[[],4],[[[3,[[2,[1]]]],[3,[[2,[1]]]]],[[17,[6]]]],[[[4,[[2,[1]]]],[4,[[2,[1]]]]],[[17,[6]]]],[[]],[[]],[[],13],[[],13],[[],16],[[],16],[[],16],[[],16],[[],18],[[],18],[[],3]],"p":[[15,"str"],[8,"AsRef"],[3,"UniCase"],[3,"Ascii"],[8,"Clone"],[4,"Ordering"],[8,"Default"],[15,"bool"],[8,"Debug"],[3,"Formatter"],[6,"Result"],[8,"Display"],[3,"String"],[4,"Cow"],[8,"FromStr"],[4,"Result"],[4,"Option"],[3,"TypeId"]]},\
"unicode_ident":{"doc":"github crates-io docs-rs","t":"FF","n":["is_xid_continue","is_xid_start"],"q":["unicode_ident",""],"d":["",""],"i":[0,0],"f":[[1,2],[1,2]],"p":[[15,"char"],[15,"bool"]]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};
