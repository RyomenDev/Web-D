Cookie :

// basic parameters - name, value , options
res.cookie("token", token, options).status(200).json({
    success: true,
    token,
    user,
    message: "User logged in successfully",
  });

----------------------------------------------------------
----------------------------------------------------------

Cookies can have various parameters that control their behavior and scope. Some common parameters include:

1. **Name**: The name of the cookie.

2. **Value**: The value of the cookie.

3. **Domain**: The domain for which the cookie is valid. If not specified, the cookie is only valid for the domain that set it.

4. **Path**: The URL path for which the cookie is valid. If not specified, the cookie is only valid for the path of the page that set it.

5. **Expires/Max-Age**: The expiration date or maximum age (in seconds) of the cookie. After this time, the cookie will be automatically deleted by the browser.

6. **Secure**: Indicates whether the cookie should only be transmitted over HTTPS connections.

7. **HttpOnly**: Indicates whether the cookie should be inaccessible to client-side scripts. This helps mitigate certain types of attacks, such as cross-site scripting (XSS).

8. **SameSite**: Specifies whether the cookie should be restricted to first-party or same-site context. This parameter helps mitigate cross-site request forgery (CSRF) and some cross-site scripting (XSS) attacks.

9. **Priority**: Indicates the priority of the cookie. This parameter is used by the browser to determine which cookies to delete when it needs to make space for new cookies.

10. **Extension attributes**: Other custom attributes can be added to cookies as needed, depending on the specific requirements of the application.

These parameters provide control over the behavior, security, and scope of cookies, allowing developers to tailor their usage to specific use cases and security requirements.