Add-Type -AssemblyName System.Drawing

$images = @(
    "new-champions\img\fire\sem fundo\champions-fire-vião-frontal.png",
    "new-champions\img\ultimate\sem fundo\champions-ultimade-gx-pro-2.png",
    "new-champions\img\inifinity\sem fundo\infinity-left.png",
    "new-champions\img\play\sem fundo\champions-play gxpro-2.png"
)

foreach ($imgPath in $images) {
    if (Test-Path $imgPath) {
        $bmp = [System.Drawing.Bitmap]::FromFile((Resolve-Path $imgPath).Path)
        
        $minX = $bmp.Width
        $minY = $bmp.Height
        $maxX = 0
        $maxY = 0

        # Fast lockbits would be better, but GetPixel works for a quick check if images aren't huge
        # Actually GetPixel is very slow in powershell. Let's just output their dimensions first.
        Write-Host "Image: $imgPath"
        Write-Host "Width: $($bmp.Width), Height: $($bmp.Height)"
        $bmp.Dispose()
    } else {
        Write-Host "Not found: $imgPath"
    }
}
