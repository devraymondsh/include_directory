use mime::Mime;
use std::{
    fmt::{self, Debug, Formatter},
    path::Path,
    str::FromStr,
};

/// A file with its contents stored in a `&'static [u8]`.
#[derive(Clone, PartialEq, Eq)]
pub struct File<'a> {
    contents: &'a [u8],
    mimetype: &'a str,
    path: &'a str,
    #[cfg(feature = "metadata")]
    metadata: Option<crate::Metadata>,
}

impl<'a> File<'a> {
    /// Create a new [`File`].
    pub const fn new(path: &'a str, contents: &'a [u8], mimetype: &'a str) -> Self {
        File {
            contents,
            mimetype,
            path,
            #[cfg(feature = "metadata")]
            metadata: None,
        }
    }

    /// The full path for this [`File`], relative to the directory passed to
    /// [`crate::include_directory!()`].
    pub fn path(&self) -> &'a Path {
        Path::new(self.path)
    }

    /// The file's mimetype.
    pub fn mimetype(&self) -> Mime {
        Mime::from_str(self.mimetype).unwrap_or(mime::TEXT_PLAIN)
    }

    /// The file's mimetype as a string.
    pub fn mimetype_as_string(&self) -> String {
        String::from(self.mimetype)
    }

    /// The file's raw contents.
    pub fn contents(&self) -> &[u8] {
        self.contents
    }

    /// The file's contents interpreted as a string.
    pub fn contents_utf8(&self) -> Option<&str> {
        std::str::from_utf8(self.contents()).ok()
    }
}

#[cfg(feature = "metadata")]
impl<'a> File<'a> {
    /// Set the [`Metadata`] associated with a [`File`].
    pub const fn with_metadata(self, metadata: crate::Metadata) -> Self {
        let File {
            path,
            contents,
            mimetype,
            ..
        } = self;

        File {
            contents,
            metadata: Some(metadata),
            mimetype,
            path,
        }
    }

    /// Get the [`File`]'s [`Metadata`], if available.
    pub fn metadata(&self) -> Option<&crate::Metadata> {
        self.metadata.as_ref()
    }
}

impl<'a> Debug for File<'a> {
    fn fmt(&self, f: &mut Formatter<'_>) -> fmt::Result {
        let File {
            path,
            contents,
            mimetype,
            #[cfg(feature = "metadata")]
            metadata,
        } = self;

        let mut d = f.debug_struct("File");

        d.field("path", path)
            .field("contents", &format!("<{} bytes>", contents.len()))
            .field("mimetype", &mimetype.to_string());

        #[cfg(feature = "metadata")]
        d.field("metadata", metadata);

        d.finish()
    }
}
