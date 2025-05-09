# Harshita Nirmal - Portfolio Website

A professional portfolio website showcasing Harshita Nirmal's skills, experience, and achievements as a Data Analyst.

## Deployment Instructions

### Local Development

To run this portfolio locally:

```
# From the portfolio directory
npm install -g serve
serve
```

This will start a local server at http://localhost:5000

### Deploying to Vercel

1. Sign up for a Vercel account at https://vercel.com
2. Install Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel:
   ```
   vercel login
   ```
4. Deploy the project:
   ```
   vercel
   ```
5. For production deployment:
   ```
   vercel --prod
   ```

## Project Structure

- `index.html` - The main HTML file containing the portfolio content
- `vercel.json` - Configuration for Vercel deployment
- `static-package.json` - Package configuration for static site deployment

## Customization

To update the portfolio:
1. Edit the index.html file to update content
2. Modify the CSS styles within the <style> tag
3. Add any additional JavaScript functionality if needed

## License

MIT 