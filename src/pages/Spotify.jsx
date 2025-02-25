import { useState,useEffect } from "react";
import { ImagePlus, Upload } from "lucide-react";

import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Label } from "../components/ui/Label";
import low from "../assets/low1.png";
export default function SpotifyKeychain() {
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">
            Create Your Spotify Keychain
          </h1>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Preview Section */}
            <div className="bg-black  mx-14 aspect-[3/4.8]">
              <div className="h-full flex flex-col gap-2">
                {/* Image Section */}
                <div className="flex-1 relative px-6 pt-6 overflow-hidden">
                  {previewImage ? (
                    <img
                      src={previewImage}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 mx-6 mt-6 flex  items-center justify-center bg-gray-800">
                      <div className="text-center  text-white">
                        <ImagePlus className="mx-auto h-12 w-12 opacity-50" />
                        <p className="mt-2 text-sm">Upload your image</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Spotify UI Section */}
                <div className="flex flex-row justify-between text-white">
                  <img
                    src={low}
                    alt=""
                    className="w-auto h-auto max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Customization Form */}
            <div className="space-y-6">
              <div>
                <Label htmlFor="image">Upload Image</Label>
                <div className="mt-2">
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="songTitle">Song Title</Label>
                <Input
                  id="songTitle"
                  placeholder="Enter your favorite song title"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="artist">Artist Name</Label>
                <Input
                  id="artist"
                  placeholder="Enter the artist name"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message">Custom Message (Optional)</Label>
                <Input
                  id="message"
                  placeholder="Add a personal message"
                  className="mt-2"
                />
              </div>

              <Button size="lg" className="w-full">
                <Upload className="mr-2 h-4 w-4" />
                Add to Cart - $19.99
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
